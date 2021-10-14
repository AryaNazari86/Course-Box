import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CheckBox = ({
  selected,
  onPress,
  style,
  textStyle,
  size = 30,
  color = "#211f30",
  text = "",
  ...props
}) => (
  <TouchableOpacity
    style={[styles.checkBox, style]}
    onPress={onPress}
    {...props}
  >
    <MaterialIcons
      size={size}
      color={color}
      name={selected ? "check-box" : "check-box-outline-blank"}
    />

    <Text style={textStyle}> {text} </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  checkBox: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default CheckBox;
