import React, { useRef, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { globalStyles } from "../../shared/globalStyle";
import SelectDropdown from "react-native-select-dropdown";
import { theme } from "../../Themes/theme";

export default function SettingButton({
  buttonText,
  buttonStyle,
  functionName,
  editButtonName,
  dropDownList,

  switchFunc1,
  switchFunc2,

  selectedVar,
}) {
  const [switchStateVar, switchStateFunc] = useState();

  const changeSwitchState = (state) => {
    if (state === 0) {
      switchStateFunc(0);
    } else if (state === 1) {
      switchStateFunc(1);
    }

    console.log(switchStateVar);
  };

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
              selectedVar(selectedItem);
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
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        </View>
      </View>
    );
  } else if (buttonStyle == "Switch") {
    return (
      <View style={styles.buttonContainer}>
        <View style={styles.smallRedTest}>
          <Text style={{ ...globalStyles.normalText, ...styles.buttonText }}>
            {buttonText}
          </Text>
        </View>
        <View style={{ ...styles.smallButtonContainer, ...styles.bigBlueTest }}>
          <TouchableOpacity
            style={styles.switchRedTest}
            onPress={() => switchFunc1}
          >
            <Text style={{ ...globalStyles.normalText, ...styles.switchText }}>
              Light
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.switchBlueTest}
            onPress={() => switchFunc2}
          >
            <Text style={{ ...globalStyles.normalText, ...styles.switchText }}>
              Dark
            </Text>
          </TouchableOpacity>
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

  smallButtonContainer: {
    width: 200,
    height: 40,

    backgroundColor: theme.color1,
    color: theme.textColor2,
    borderColor: theme.textColor2,

    borderWidth: 2,
    borderRadius: 10,

    flexDirection: "row",
  },

  editText: {
    fontSize: 18,
    paddingTop: 5,
  },

  redTest: {
    width: 300,
    justifyContent: "center",
  },

  smallRedTest: {
    width: 170,
    justifyContent: "center",
  },

  blueTest: {
    justifyContent: "center",
    backgroundColor: theme.color1,
  },

  bigBlueTest: {
    width: 200,
  },

  dropDown: {
    width: 200,
    height: 40,

    backgroundColor: theme.color1,
    color: theme.color1,
    borderColor: theme.textColor2,

    borderWidth: 2,
    borderRadius: 10,
  },

  dropDownText: {
    fontSize: 18,
    color: theme.textColor2,
  },

  dropDownDrop: {
    backgroundColor: theme.color1,

    borderBottomColor: theme.textColor2,

    borderBottomWidth: 2,
    borderRadius: 10,
  },

  dropDownRow: {
    backgroundColor: theme.color1,

    borderColor: theme.textColor2,

    borderWidth: 2,
  },

  switchRedTest: {
    justifyContent: "center",
    flex: 1,
    borderRightWidth: 2,
    borderRightColor: theme.textColor2,
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
