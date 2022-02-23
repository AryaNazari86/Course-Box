import { Image } from "react-native";
import React from "react";
import { GetCategory } from "../../Services/courseService";
import { useState } from "react";
export default function CategoryIcon({ category, style }) {
  const [categoryImage, setCategoryImage] = useState(
    "../../assets/3DIcons/Animated/Soccer.gif"
  );
  GetCategory().then((result) => {
    setCategoryImage(
      "../../assets/3DIcons/Animated/" + result.data.category_image
    );
  });
  return <Image source={categoryImage} style={style} />;
}
