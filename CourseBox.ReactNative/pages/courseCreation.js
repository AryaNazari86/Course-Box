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
} from "react-native";
import { globalStyles } from "../shared/globalStyle";
import Header from "../shared/header";

// Lottie Library
import LottieView from "lottie-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Formik } from "formik";
import * as yup from "yup";

// * Set of yup rules for the text input
const ReviewSchema = yup.object({
  courseName: yup.string().required().min(5),
  courseDescription: yup.string().required().min(15),
});

export default function CourseCreation({ navigation }) {
  // If loaded is false, show a loader.
  const [loaded, setLoaded] = useState(false);

  // When app loads this function is called.
  InteractionManager.runAfterInteractions(function () {
    setLoaded(true);
  });

  if (loaded) {
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
            backAction={() => navigation.goBack()}
          />
          <Formik
            initialValues={{ courseName: "", courseDescription: "" }}
            validationSchema={ReviewSchema}
            onSubmit={(values, actions) => {
              signUpPress(values);
              actions.resetForm();
            }}
            style={globalStyles.container}
          >
            {(props) => (
              <View style={globalStyles.container}>
                <Text
                  style={{ ...globalStyles.headerTitle, ...styles.headerText }}
                >
                  Profile
                </Text>
                {/* Course Name */}
                <View style={globalStyles.textInputView}>
                  <TextInput
                    style={globalStyles.inputComp}
                    placeholder="Course Name"
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

                {/* Course Description */}
                <View style={styles.largeTextInputView}>
                  <TextInput
                    style={styles.largeInputComp}
                    placeholder="Course Name"
                    multiline={true}
                    numberOfLines={3}
                    onChangeText={props.handleChange("courseDescription")}
                    value={props.values.courseDescription}
                    onBlur={props.handleBlur("courseDescription")}
                    placeholderTextColor={"black"}
                    placeholderTextColor="#A8DADC"
                    maxLength={80}
                  />
                </View>

                <Text style={globalStyles.errorText}>
                  {props.touched.courseDescription && props.errors.courseDescription}
                </Text>
              </View>

              
            )}
          </Formik>
        </View>
      </TouchableWithoutFeedback>
    );
  } else {
    return (
      <View style={globalStyles.loaderContainer}>
        <LottieView
          autoPlay={true}
          loop={true}
          style={globalStyles.loader}
          source={require("../assets/Animations/7751-load.json")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  largeInputComp: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    width: 330,
    paddingLeft: 20,
    fontSize: 18,
    fontFamily: "rubik-regular",
    color: "#A8DADC",
    height: 500,
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
});
