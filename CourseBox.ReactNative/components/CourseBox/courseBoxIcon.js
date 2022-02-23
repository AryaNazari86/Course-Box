import { Image } from "react-native";
import React from "react";
import { GetCategory } from "../../Services/courseService";
import { useState } from "react";
export default function CategoryIcon({ category, style }) {
  const [categoryImage, setCategoryImage] = useState("\Soccer.gif");
  const [categoryFetched, setCategoryFetched] = useState(false);
  const fetchImage = async () => {
    GetCategory(category).then((result) => {
      if(result.successful){
        setCategoryImage(result.data.category_image);
      }
    });
  };
  if(!categoryFetched){
    fetchImage();
    setCategoryFetched(true);
  }
  return <Image source={{
    uri:
      "http://192.168.24.252:5000/static/category_image/" +
      categoryImage,
  }} style={style} />;
}
