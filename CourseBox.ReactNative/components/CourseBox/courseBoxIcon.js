import { Image } from "react-native";
import React from "react";
import { GetCategory } from "../../Services/courseService";
import { useState } from "react";
export default function CategoryIcon({ category, style }) {
  const [categoryImage, setCategoryImage] = useState(
    reguire("../../assets/3DIcons/Animated/Soccer.gif")
  );
  const [categoryFetched, setCategoryFetched] = useState(false);
  if(!categoryFetched){
    GetCategory().then((result) => {
      setCategoryImage(
        require("../../assets/3DIcons/Animated/" + result.data.category_image)
      );
    });
    setCategoryFetched(true);
  }
  return <Image source={categoryImage} style={style} />;
}
