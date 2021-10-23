import React, { useRef, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { globalStyles } from "../../shared/globalStyle";

export default function SettingButton({ buttonText, buttonStyle }) {
  if (buttonStyle == "Edit") {
    return (
      <TouchableOpacity style={styles.buttonContainer}>
        <View style={styles.redTest}>
          <Text style={{ ...globalStyles.normalText, ...styles.buttonText }}>
            {buttonText}
          </Text>
        </View>
        <View style={styles.blueTest}>
          <Text style={{ ...globalStyles.normalText, ...styles.editText }}>
            Edit
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    marginLeft: 10,
    fontSize: 18,
    textAlign: "left",
    alignSelf: "flex-start",
    paddingTop: 5,
  },
  buttonContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#3D4751",
    marginTop: 20,

    flexDirection: "row",
    paddingBottom: 15,
    width: "90%",
  },
  editText: {
    marginRight: 10,
    fontSize: 18,
    textAlign: "right",
    alignSelf: "flex-end",
    paddingTop: 5,
  },

  redTest: {
    flex: 1,
  },

  blueTest: {
    flex: 1,
  },
});
