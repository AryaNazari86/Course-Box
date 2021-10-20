import React, { useRef, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { globalStyles } from "../../shared/globalStyle";

export default function settingButton() {
  return (
    <TouchableOpacity>
      <Text style={{ ...globalStyles.normalText, ...styles.buttonText }}>
        Helo there
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    paddingRight: 20,
  },
  buttonContainer: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 50,
  },
});
