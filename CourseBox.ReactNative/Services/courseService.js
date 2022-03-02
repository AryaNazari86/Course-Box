import React from "react";
import md5 from "md5";

import { GetToken } from "./userService";

const API_ADDRESS = "127.0.0.1:5000";

export async function GetSubjects(courseId) {
  let data = { course_id: courseId };
  let result = {
    successful: false,
    response: "",
    data: "",
  };
  await fetch("http://" + API_ADDRESS + "/GetSubjects", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((response) => {
    if (response.status == 200) {
      result.successful = true;
      result.data = response.json();
    } else {
      result.response = "Error...";
    }
  });
  return result;
}
export async function GetCategory(category_id) {
  try {
    let data = {
      category_id: category_id,
    };
    let result = {
      successful: false,
      response: "",
      data: "",
    };
    await fetch("http://" + API_ADDRESS + "/GetCategory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.status == 200) {
        result.successful = true;
        result.data = response.json();
      } else {
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

export async function GetLatestCourses() {
  try {
    let result = {
      successful: false,
      response: "",
      data: "",
    };
    await fetch("http://" + API_ADDRESS + "/LatestCourses", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      if (response.status == 200) {
        result.successful = true;
        result.data = response.json();
      } else {
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

export async function AddLessonBlock(values) {
  try {
    let block = {
      type: values.type,
      content: values.content,
      lesson_id: values.lesson_id,
    };
    let result = {
      successful: false,
      response: "",
    };
    await fetch("http://" + API_ADDRESS + "/Course/AddLessonBlock", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(block),
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

export async function GetLessonBlocks(lesson_id) {
  try {
    let data = {
      lesson_id: lesson_id,
    };
    let result = {
      successful: false,
      response: "",
      data: "",
    };
    await fetch(API_ADDRESS + "/GetLessonBlocks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.status == 200) {
        result.successful = true;
        result.data = response.json();
      } else {
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

export async function GetCourseSubjects(course_id) {
  try {
    let data = {
      course_id: course_id,
    };
    let result = {
      successful: false,
      response: "",
      data: "",
    };
    await fetch(API_ADDRESS + "/GetSubjects/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-tokens": GetToken(),
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.status == 200) {
        result.successful = true;
        result.data = response.json();
      } else {
        result.response = "Error...";
      }
    });
    return result;
  } catch (error) { }
}

export async function UploadFile(file, id) {
  try {
    var data = new FormData();
    data.append("file", file);
    data.append("id", id);

    let result = {
      successful: false,
      response: "",
      data: "",
    };
    await fetch("http://" + API_ADDRESS + "/UploadFile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(file),
    }).then((response) => {
      if (response.status == 200) {
        result.successful = true;
        result.data = response.json();
      } else {
        result.response = "Error...";
      }
    });
    return result.data.url;
  } catch (error) {
    return {
      successful: false,
      response: "Error...",
    };
  }
}

export async function GetLessonBlockID() {
  try {
    var data = new FormData();
    data.append("file", file);
    data.append("id", id);

    let result = {
      successful: false,
      response: "",
      data: "",
    };
    await fetch("http://" + API_ADDRESS + "/GetLessonBlockID", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      if (response.status == 200) {
        result.successful = true;
        result.data = response.json();
      } else {
        result.response = "Error...";
      }
    });
    return result.data.id;
  } catch (error) {
    return {
      successful: false,
      response: "Error...",
    };
  }
}

export async function GetMadeCourses(token) {
  try {
    let result = {
      successful: false,
      response: "",
      data: "",
    };
    await fetch("http://" + API_ADDRESS + "/GetCoursesByAuthorId", {
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

export async function DeleteCourse(courseID) {
  try {
    let result = {
      successful: false,
      response: "",
    };
    GetToken().then(async (r) => {
      let course = {
        course_id: courseID,
      };

      await fetch("http://" + API_ADDRESS + "/DeleteCourse", {
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

export async function AddSubject() {
  let data = {
    icon: icon,
    title: title,
    course_id: courseId
  }

  await fetch('https:')

  try {
    let data = {
      icon: icon,
      title: title,
      course_id: courseId
    }

    await fetch("http://" + API_ADDRESS + "/AddSubject", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-tokens": r,
      },
      body: JSON.stringify(data),
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
    console.log(result);
    return result;
  } catch (error) {
    return {
      successful: false,
      response: error.message,
    };
  }
}

export async function search(searchValue, category) {
  try {
    let data = {
      search_value: searchValue,
      category_id: category
    };
    await fetch("http://" + API_ADDRESS + "/SearchCourses", {
      method: 'POST',
      headers: { "Content-Type": "application/json", "x-access-tokens": token },
      body: JSON.stringify(data),
    }).then((response) => {
      return response.json();
    })
  } catch (error) {
    return {
      successful: false,
      response: error.message,
    };

  }
}

export async function GetAllCategories() {
  try {
    let result = {
      successful: false,
      response: "",
      data: "",
    };
    await fetch("http://" + API_ADDRESS + "/Categories", { method: 'GET' }).then((response) => {
      if (response.status == 200) {
        result.successful = true;
        result.data = response.json();
      } else {
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