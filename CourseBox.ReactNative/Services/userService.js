import React from "react";
import md5 from "md5";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_ADDRESS = "192.168.214.8:5000";
export default API_ADDRESS;

export async function SignUp(values) {
  try {
    let user = {
      username: values.username,
      name: values.name,
      email: values.email,
      password: md5(values.password),
    };
    let result = {
      successful: false,
      response: "",
    };
    await fetch("http://" + API_ADDRESS + "/User/Register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((response) => {
      result.response = response.statusText;
      if (response.status == 200) {
        result.successful = true;
      } else if (response.status == 500) {
        result.response = "Error...";
      } else if (response.status == 404) {
        result.response = "Error...";
      }
    });
    return result;
  } catch (error) {
    return {
      successful: false,
      response: "Error...",
    };
  }
}

export async function Login(values) {
  try {
    let user = {
      email: values.email,
      password: md5(values.password),
    };
    let result = {
      successful: false,
      response: "",
      token: "",
    };
    await fetch("http://" + API_ADDRESS + "/User/Login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((response) => {
      if (response.status == 200) {
        result.successful = true;
        result.token = response.json();
      } else if (response.status == 500) {
        result.response = "Error...";
      } else if (response.status == 404) {
        result.response = "A User with these details doesn't exists.";
      }
    });
    return result;
  } catch (error) {
    return {
      successful: false,
      response: "Error...",
    };
  }
}

export async function GetUserDetails(token) {
  try {
    let result = {
      successful: false,
      response: "",
      data: "",
    };
    await fetch("http://" + API_ADDRESS + "/User/Details", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-access-tokens": token },
    }).then((response) => {
      if (response.status == 200) {
        result.successful = true;
        result.data = response.json();
      } else if (response.status == 500) {
        result.response = "Error...";
      } else if (response.status == 401) {
        result.response = "Unauthorized...";
      }
    });
    return result;
  } catch (error) {
    return {
      successful: false,
      response: "Error...",
    };
  }
}

export async function CreateCourse(values, courseCategory, imageName) {
  try {
    let result = {
      successful: false,
      response: "",
    };
    GetToken().then(async (r) => {
      let course = {
        Title: values.courseName,
        Description: values.courseDescription,
        Category: courseCategory,
        Image: imageName,
      };

      await fetch("http://" + API_ADDRESS + "/CreateCourse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-tokens": r,
        },
        body: JSON.stringify(course),
      }).then((response) => {
        result.response = response.statusText;
        if (response.status == 200) {
          result.successful = true;
        } else if (response.status == 500) {
          result.response = "Error1...";
        } else if (response.status == 404) {
          result.response = "Error2...";
        }
      });
    });
    return result;
  } catch (error) {
    return {
      successful: false,
      response: error.message,
    };
  }
}

export async function GetToken() {
  const storedData = AsyncStorage.getItem("token");
  // const storedDataParsed = JSON.parse(storedData);
  return storedData;
}
