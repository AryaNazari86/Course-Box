import { Image } from "react-native";
import React from "react";
import { GetCategory } from "../../Services/courseService";
import { useState } from "react";
import API_ADDRESS from "../../Services/userService";

export default function CategoryIcon({ category, style }) {
  const [categoryImage, setCategoryImage] = useState("Soccer.gif");
  const [categoryFetched, setCategoryFetched] = useState(false);
  const fetchImage = async () => {
    GetCategory(category).then(async (result) => {
      if (result.successful) {
        result.data.then((data) => setCategoryImage(data.category_image));
      }
    });
  };
  if (!categoryFetched) {
    fetchImage();
    setCategoryFetched(true);
  }

  return (
    <Image
      source={{
        uri:
          "http://" + API_ADDRESS + "/static/category_image/" + categoryImage,
      }}
      style={style}
    />
  );
}
