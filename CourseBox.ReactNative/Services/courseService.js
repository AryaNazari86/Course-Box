import React from "react";
import md5 from "md5";

const API_ADDRESS = "192.168.1.102:5000";

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
    await fetch(API_ADDRESS + "/GetLessonBlocks/" + lesson_id, {
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
