import React, { useRef, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { globalStyles } from "../../shared/globalStyle";
import SelectDropdown from "react-native-select-dropdown";

export default function SettingButton({
  buttonText,
  buttonStyle,
  functionName,
  editButtonName,
  dropDownList,
}) {
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
            <Text
              style={{ ...globalStyles.smallButtonText, ...styles.editText }}
            >
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
            <Text
              style={{ ...globalStyles.smallButtonText, ...styles.editText }}
            >
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
          <SelectDropdown
            data={dropDownList}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonStyle={styles.dropDown}
            buttonTextStyle={{
              ...globalStyles.smallButtonText,
              ...styles.editText,
            }}
            dropdownStyle={styles.dropDownDrop}
            rowTextStyle={{
              ...globalStyles.smallButtonText,
              ...styles.editText,
            }}
            rowStyle={styles.dropDownRow}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
          />
        </View>
      </View>
    );
  } else if (buttonStyle == "Switch") {
    return (
      <View style={styles.smallButtonContainer}>
        <TouchableOpacity style={styles.switchRedTest}>
          <Text style={{ ...globalStyles.normalText, ...styles.switchText }}>
            Light
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.switchBlueTest}>
          <Text style={{ ...globalStyles.normalText, ...styles.switchText }}>
            Dark
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
    marginBottom: -10,
    width: "90%",

    justifyContent: "center",
  },

  smallButtonContainer: {
    width: 200,
    height: 40,

    backgroundColor: "#161D28",
    color: "#A8DADC",
    borderColor: "#A8DADC",

    borderWidth: 2,
    borderRadius: 10,

    flexDirection: "row",
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
    justifyContent: "center",
    width: 100,
  },

  bigBlueTest: {
    width: 200,
  },

  dropDown: {
    width: 200,
    height: 40,

    backgroundColor: "#161D28",
    color: "#A8DADC",
    borderColor: "#A8DADC",

    borderWidth: 2,
    borderRadius: 10,
  },

  dropDownText: {
    fontSize: 18,
    color: "#A8DADC",
  },

  dropDownDrop: {
    backgroundColor: "#161D28",

    borderBottomColor: "#A8DADC",

    borderBottomWidth: 2,
    borderRadius: 10,
  },

  dropDownRow: {
    backgroundColor: "#161D28",

    borderColor: "#A8DADC",

    borderWidth: 2,
  },

  switchRedTest: {
    justifyContent: "center",
    flex: 1,
    borderRightWidth: 2,
    borderRightColor: "#A8DADC",
  },

  switchBlueTest: {
    justifyContent: "center",
    flex: 1,
  },

  switchText: {
    fontSize: 18,
    alignSelf: "center",
  },
});
