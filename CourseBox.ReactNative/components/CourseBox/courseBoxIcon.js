import { Image } from "react-native";
import React from "react";
export default function CategoryIcon({ category, style }) {
  if (category == "Sports") {
    return (
      <Image
        source={require("../../assets/3DIcons/Animated/Soccer.gif")}
        style={style}
      />
    );
  } else if (category == "Maths") {
    return (
      <Image
        source={require("../../assets/3DIcons/Animated/NewMath.gif")}
        style={style}
      />
    );
  } else if (category == "Programming") {
    return (
      <Image
        source={require("../../assets/3DIcons/Animated/pc.gif")}
        style={style}
      />
    );
  } else if (category == "Art") {
    return (
      <Image
        source={require("../../assets/3DIcons/Animated/Paint.gif")}
        style={style}
      />
    );
  } else if (category == "Science") {
    return (
      <Image
        source={require("../../assets/3DIcons/Animated/Science.gif")}
        style={style}
      />
    );
  }
}
