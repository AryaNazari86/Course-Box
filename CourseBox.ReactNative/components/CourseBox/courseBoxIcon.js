import { Image } from "react-native";
import React from "react";
import { GetCategory } from "../../Services/courseService";
export default function CategoryIcon({ category, style }) {
  const [categoryImage, setCategoryImage] = useState("../../assets/3DIcons/Animated/Soccer.gif");
  GetCategory().then(result => {
    setCategoryImage("../../assets/3DIcons/Animated/" + JSON.parse(result.data).category_image);
  });
  return (
    <Image
      source={require(categoryImage)}
      style={style}
    />
  );
}
