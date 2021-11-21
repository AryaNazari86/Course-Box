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

import { Formik } from "formik";
import * as yup from "yup";

import SettingButton from "../components/SettingButton/settingButton";

export default function CourseCreation({ navigation, closeFunc }) {
  // If loaded is false, show a loader.
  const [loaded, setLoaded] = useState(false);

  // When app loads this function is called.
  InteractionManager.runAfterInteractions(function () {
    setLoaded(true);
  });

  const [selectedCourseCategory, setSelectedCourseCategory] = useState("");
  const [categoryError, setCategoryError] = useState("");

  const testFunc = () => {
    if (selectedCourseCategory != "Math") {
      setCategoryError("You should do math!");
    } else {
      setCategoryError("");
      console.log(selectedCourseCategory);
    }
  };

  // * Set of yup rules for the text input
  const ReviewSchema = yup.object({
    courseName: yup.string().required().min(5),
    courseDescription: yup.string().required().min(15),
  });

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      style={globalStyles.container}
    >
      <View>
        {/* Header */}
        <Header
          title="Create Course"
          height={60}
          backButton={true}
          backAction={closeFunc}
        />
        <Formik
          initialValues={{
            courseName: "",
            courseDescription: "",
          }}
          validationSchema={ReviewSchema}
          onSubmit={(values, actions) => {
            testFunc();
          }}
          style={globalStyles.container}
        >
          {(props) => (
            <View style={globalStyles.container}>
              <Text
                style={{
                  ...globalStyles.headerTitle,
                  ...globalStyles.smallTitle,
                }}
              >
                Name Of The Course
              </Text>
              {/* Course Name */}
              <View
                style={{
                  ...globalStyles.textInputView,
                }}
              >
                <TextInput
                  style={globalStyles.inputComp}
                  // placeholder="Course Name"
                  onChangeText={props.handleChange("courseName")}
                  value={props.values.courseName}
                  onBlur={props.handleBlur("courseName")}
                  placeholderTextColor={"black"}
                  placeholderTextColor="#A8DADC"
                  maxLength={10}
                />
              </View>

              <Text style={globalStyles.errorText}>
                {props.touched.courseName && props.errors.courseName}
              </Text>

              <Text
                style={{
                  ...globalStyles.headerTitle,
                  ...globalStyles.smallTitle,
                }}
              >
                Description Of The Course
              </Text>
              {/* Course Description */}
              <View
                style={{
                  ...styles.largeTextInputView,
                  ...styles.attachedInput,
                }}
              >
                <TextInput
                  style={styles.largeInputComp}
                  // placeholder="Course Name"
                  multiline={true}
                  numberOfLines={3}
                  onChangeText={props.handleChange("courseDescription")}
                  value={props.values.courseDescription}
                  onBlur={props.handleBlur("courseDescription")}
                  placeholderTextColor={"black"}
                  placeholderTextColor="#A8DADC"
                  maxLength={80}
                  textAlignVertical={"top"}
                />
              </View>

              <Text style={globalStyles.errorText}>
                {props.touched.courseDescription &&
                  props.errors.courseDescription}
              </Text>

              <View style={{ ...globalStyles.container, ...styles.category }}>
                <SettingButton
                  buttonText={"Course Category"}
                  buttonStyle="Dropdown"
                  dropDownList={["Code", "Math", "Paint", "Science", "Sport"]}
                  selectedVar={setSelectedCourseCategory}
                />
              </View>

              <Text style={{ ...globalStyles.errorText, ...styles.error }}>
                {categoryError}
              </Text>

              <View style={{ ...globalStyles.container, ...styles.category }}>
                <SettingButton
                  buttonText={"Course Picture"}
                  buttonStyle="Edit"
                  functionName={testFunc}
                />
              </View>

              <Text style={{ ...globalStyles.errorText, ...styles.error }}>
                {categoryError}
              </Text>

              <TouchableOpacity
                style={{ ...globalStyles.button, ...styles.button }}
                onPress={props.handleSubmit}
              >
                <Text style={globalStyles.buttonText}>Create Course</Text>
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
    color: "#A8DADC",
    height: 100,

    marginTop: 20,
  },

  largeTextInputView: {
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    height: 100,
    backgroundColor: "#161D28",
    borderColor: "#3D4751",
    marginTop: 20,
    color: "#A8DADC",
  },

  smallTitle: {
    fontSize: 16,
    paddingTop: 30,
  },

  button: {
    marginTop: 80,
  },

  category: {
    marginTop: 20,
  },

  error: {
    marginTop: 18,
  },
});
