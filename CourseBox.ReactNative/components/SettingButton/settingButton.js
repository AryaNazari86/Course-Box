import React, { useRef, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { globalStyles } from "../../shared/globalStyle";
import { Dropdown } from "react-native-material-dropdown-v2";

export default function SettingButton({
  buttonText,
  buttonStyle,
  functionName,
  editButtonName,
}) {
  let data = [
    {
      value: "Banana",
    },
    {
      value: "Mango",
    },
    {
      value: "Pear",
    },
  ];

  if (buttonStyle == "Edit") {
    if (editButtonName) {
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
              {editButtonName}
            </Text>
          </TouchableOpacity>
        </View>
      );
    } else {
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
  } else if (buttonStyle == "Dropdown") {
    return (
      <View style={styles.buttonContainer}>
        <View style={styles.smallRedTest}>
          <Text style={{ ...globalStyles.normalText, ...styles.buttonText }}>
            {buttonText}
          </Text>
        </View>
        <View style={styles.bigBlueTest}>
          <Dropdown
            label="Favorite Fruit"
            data={data}
            style={styles.dropDown}
          />
        </View>
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
    marginBottom: -10,
    width: "90%",

    justifyContent: "center",
  },
  editText: {
    fontSize: 18,
    paddingTop: 5,
  },

  redTest: {
    width: 270,
    justifyContent: "center",
  },

  smallRedTest: {
    width: 170,
    justifyContent: "center",
  },

  blueTest: {
    width: 100,
  },

  bigBlueTest: {
    width: 200,
  },

  dropDown: {
    width: 200,
    height: 40,
    backgroundColor: "#A1D1D3",

    alignSelf: "center",
  },
});
