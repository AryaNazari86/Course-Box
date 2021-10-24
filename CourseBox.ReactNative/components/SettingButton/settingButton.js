import React, { useRef, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { globalStyles } from "../../shared/globalStyle";

export default function SettingButton({
  buttonText,
  buttonStyle,
  functionName,
}) {
  if (buttonStyle == "Edit") {
    return (
      <View style={styles.buttonContainer}>
        <View style={styles.redTest}>
          <Text style={{ ...globalStyles.normalText, ...styles.buttonText }}>
            {buttonText}
          </Text>
        </View>
        <TouchableOpacity
          onPress={functionName}
          style={{ ...globalStyles.smallButton, ...styles.blueTest }}
          onPress={functionName}
        >
          <Text style={{ ...globalStyles.buttonText, ...styles.editText }}>
            Edit
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    marginLeft: 10,
    fontSize: 18,
    textAlign: "left",
    alignSelf: "flex-start",
    paddingTop: -5,
  },
  buttonContainer: {
    // borderBottomWidth: 1,
    // borderBottomColor: "#3D4751",

    flexDirection: "row",
    // paddingBottom: 15,
    width: "90%",

    justifyContent: "center",
  },
  editText: {
    marginRight: 10,
    fontSize: 18,
    textAlign: "right",
    alignSelf: "flex-end",
    paddingTop: 5,
  },

  redTest: {
    width: 300,
    justifyContent: "center",
  },

  blueTest: {
    justifyContent: "center",
  },
});
