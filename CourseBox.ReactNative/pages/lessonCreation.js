import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  InteractionManager,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../shared/globalStyle";
import Header from "../shared/header";

// Lottie Library
import LottieView from "lottie-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as UserService from "../Services/userService";

import { Formik } from "formik";
import * as yup from "yup";

import SettingButton from "../components/SettingButton/settingButton";
import { theme } from "../Themes/theme";

import { addLesson } from "../Services/courseService";

export default function LessonCreation({ navigation, closeFunc }) {
  // If loaded is false, show a loader.
  const [loaded, setLoaded] = useState(false);

  // When app loads this function is called.
  InteractionManager.runAfterInteractions(function () {
    setLoaded(true);
  });

  const [selectedIcon, setSelectedIcon] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const [categoryError, setCategoryError] = useState("");
  const [colorError, setColorError] = useState("");

  const [selectedCousePicture, setSelectedCoursePicture] = useState("");
  const [pictureError, setPictureError] = useState("");

  const [dataFetched, setDataFetched] = useState(false);
  var storedDataParsed = null;

  const testFunc = (values) => {
    if (selectedIcon) {
      // ! Do somthing with the data
      AddSubject(values, selectedIcon);
      closeFunc();
    } else {
      if (!selectedIcon) {
        setCategoryError("Select an Icon");
      }
      if (!selectedColor) {
        setColorError("Select a Color");
      }
    }
  };

  // * Set of yup rules for the text input
  const ReviewSchema = yup.object({
    Title: yup.string().required().min(4),
  });

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      style={globalStyles.container}
    >
      <View>
        {/* Header */}
        <Header
          title="Create Subject"
          height={40}
          backButton={true}
          backAction={closeFunc}
          backgroundColor={theme.color1}
        />
        <Formik
          initialValues={{
            Title: "",
          }}
          validationSchema={ReviewSchema}
          onSubmit={(values, actions) => {
            testFunc(values);
          }}
          style={globalStyles.container}
        >
          {(props) => (
            <View style={globalStyles.container}>
              {/* Title */}
              <View
                style={{
                  ...globalStyles.textInputView,
                  marginTop: 20,
                }}
              >
                <TextInput
                  style={globalStyles.inputComp}
                  placeholder="Title"
                  onChangeText={props.handleChange("Title")}
                  value={props.values.Title}
                  onBlur={props.handleBlur("Title")}
                  placeholderTextColor={"black"}
                  placeholderTextColor={theme.textColor2}
                  maxLength={45}
                />
              </View>

              <Text style={globalStyles.errorText}>
                {props.touched.Title && props.errors.Title}
              </Text>

              {/* Icon */}
              <View style={{ ...globalStyles.container, ...styles.category }}>
                <SettingButton
                  buttonText={"Icon"}
                  buttonStyle="Dropdown"
                  dropDownList={["book", "article", "bookmark"]}
                  selectedVar={setSelectedIcon}
                />
              </View>

              <Text style={{ ...globalStyles.errorText, ...styles.error }}>
                {categoryError}
              </Text>

              {/* Color */}
              <View style={{ ...globalStyles.container, ...styles.category }}>
                <SettingButton
                  buttonText={"Color"}
                  buttonStyle="Dropdown"
                  dropDownList={["Red", "Blue", "Green"]}
                  selectedVar={setSelectedColor}
                />
              </View>

              <Text style={{ ...globalStyles.errorText, ...styles.error }}>
                {colorError}
              </Text>

              <TouchableOpacity
                style={{ ...globalStyles.button, ...styles.button }}
                onPress={props.handleSubmit}
              >
                <Text style={globalStyles.buttonText}>Create Lesson</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  attachedInput: {
    marginTop: 3,
  },
  largeInputComp: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    width: 330,
    paddingLeft: 20,
    fontSize: 18,
    fontFamily: "rubik-regular",
    color: theme.textColor2,
    height: 100,

    marginTop: 20,
  },

  largeTextInputView: {
    borderRadius: 10,
    borderColor: theme.textColor2,
    borderWidth: 2,

    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    height: 100,
    backgroundColor: theme.color1,
    marginTop: 20,
    color: "#A8DADC",
  },

  smallTitle: {
    fontSize: 16,
    paddingTop: 30,
  },

  button: {
    marginTop: 0,
  },

  category: {
    marginTop: 10,
    marginRight: -25,
  },

  categoryNOMargin: {
    marginTop: -15,
    marginRight: -25,
  },

  error: {
    marginTop: 18,
  },
});
