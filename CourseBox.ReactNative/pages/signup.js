import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  TouchableOpacity,
  BackHandler,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import { globalStyles } from "../shared/globalStyle";
import Header from "../shared/header";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as yup from "yup";
import { setStatusBarStyle } from "expo-status-bar";
import * as UserService from "../Services/userService";
import { Snackbar } from "react-native-paper";

import { Dimensions } from "react-native";
import { theme } from "../Themes/theme";
import { ScrollView } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

// * Set of yup rules for the text input
const ReviewSchema = yup.object({
  username: yup.string().required().max(10).min(4),
  name: yup.string().required().max(30).min(3),
  email: yup.string().required().min(5),
  password: yup.string().required().min(5).max(100),
});

export default function SignUp({ makeUser, navigation }) {
  setStatusBarStyle("light");
  // If Back Button clicked close
  BackHandler.addEventListener("hardwareBackPress", () => {
    BackHandler.exitApp();
    return false;
  });
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState();
  // * Go to the tab componnent
  const signUpPress = (values) => {
    UserService.SignUp(values).then((result) => {
      if (result.successful) {
        setShowResult(false);
        navigation.navigate("SignIn");
      } else {
        setShowResult(true);
        setResult(result.response);
      }
    });
  };
  // * Go to the sign in page
  const signInPress = () => {
    navigation.navigate("SignIn");
  };

  // * The hide password state
  const [hidePass, setHidePass] = useState(true);
  // * The hide password icon state
  const [hidePassIcon, setHidePassIcon] = useState("eye-off");

  // * The function that toggles the visibility of password
  const hidePassFunc = () => {
    if (hidePass) {
      // Make false
      setHidePass(false), setHidePassIcon("eye-off");
    } else {
      // Make true
      setHidePass(true), setHidePassIcon("eye");
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      style={globalStyles.container}
    >
      <View style={{ flex: 1 }}>
        <Header title="Sign Up" height={60} />
        <ImageBackground
          source={require("../assets/Images/Backgrounds/acf4d023e1b9ff3a285d5cab92433f07.jpg")}
          resizeMode="cover"
          style={styles.image}
          blurRadius={0}
        >
          <Formik
            initialValues={{ username: "", name: "", email: "", password: "" }}
            validationSchema={ReviewSchema}
            onSubmit={(values, actions) => {
              signUpPress(values);
              actions.resetForm();
            }}
            style={globalStyles.container}
          >
            {(props) => (
              <KeyboardAvoidingView
                behavior="padding"
                style={{ ...globalStyles.container, ...styles.container }}
              >
                {/* Username */}
                <View style={{ ...globalStyles.textInputView, marginTop: 20 }}>
                  <TextInput
                    style={globalStyles.inputComp}
                    placeholder="Username"
                    onChangeText={props.handleChange("username")}
                    value={props.values.username}
                    onBlur={props.handleBlur("username")}
                    placeholderTextColor={"black"}
                    placeholderTextColor={theme.textColor2}
                  />
                </View>

                <Text style={globalStyles.errorText}>
                  {props.touched.username && props.errors.username}
                </Text>
                {/* Name */}
                <View style={globalStyles.textInputView}>
                  <TextInput
                    style={globalStyles.inputComp}
                    placeholder="Name"
                    onChangeText={props.handleChange("name")}
                    value={props.values.name}
                    onBlur={props.handleBlur("name")}
                    placeholderTextColor={"black"}
                    placeholderTextColor={theme.textColor2}
                  />
                </View>

                <Text style={globalStyles.errorText}>
                  {props.touched.name && props.errors.name}
                </Text>

                {/* Email */}
                <View style={globalStyles.textInputView}>
                  {/* <MaterialIcons name="email" size={40} color="black" style={{ paddingLeft: 5, }} /> */}
                  <TextInput
                    style={globalStyles.inputComp}
                    placeholder="Email"
                    onChangeText={props.handleChange("email")}
                    value={props.values.email}
                    onBlur={props.handleBlur("email")}
                    placeholderTextColor={"black"}
                    placeholderTextColor={theme.textColor2}
                  />
                </View>

                <Text style={globalStyles.errorText}>
                  {props.touched.email && props.errors.email}
                </Text>

                {/* Password */}
                <View style={globalStyles.textInputView}>
                  <TextInput
                    style={{ ...globalStyles.inputComp, ...styles.input }}
                    placeholder="Password"
                    onChangeText={props.handleChange("password")}
                    value={props.values.password}
                    onBlur={props.handleBlur("password")}
                    secureTextEntry={hidePass}
                    placeholderTextColor={"black"}
                    placeholderTextColor={theme.textColor2}
                  />
                  <TouchableOpacity onPress={hidePassFunc}>
                    <MaterialCommunityIcons
                      name={hidePassIcon}
                      size={30}
                      color={theme.textColor2}
                      style={globalStyles.hideIcon}
                    />
                  </TouchableOpacity>
                </View>

                <Text style={{ ...globalStyles.errorText, marginBottom: 0 }}>
                  {props.touched.password && props.errors.password}
                </Text>

                {/* Sign Up Button */}
                <TouchableOpacity
                  style={{
                    ...globalStyles.button,
                    flexDirection: "row",
                    marginTop: 0,
                    marginBottom: 10,
                  }}
                  onPress={props.handleSubmit}
                >
                  <MaterialIcons
                    name="account-circle"
                    size={40}
                    color={theme.color2}
                    style={{ marginRight: 5 }}
                  />
                  <Text style={globalStyles.buttonText}>Sign Up</Text>
                </TouchableOpacity>

                <View
                  style={{
                    ...globalStyles.normalAndHighlightContainer,
                  }}
                >
                  <Text
                    style={{
                      ...globalStyles.normalAndHighlightContainer,
                      marginBottom: 20,
                    }}
                  >
                    Already have an account?{" "}
                  </Text>
                  <TouchableOpacity onPress={signInPress}>
                    <Text style={globalStyles.highlitedText}>Sign In</Text>
                  </TouchableOpacity>
                </View>
              </KeyboardAvoidingView>
            )}
          </Formik>
          <Snackbar style={styles.result} visible={showResult}>
            {result}
          </Snackbar>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  // The text input
  input: {
    width: 250,
  },
  result: {
    bottom: 0,
    backgroundColor: "#f50a29",
  },

  backgroundImage: {
    width: width,
    height: height,
  },

  container: {
    width: 370,
    height: 480,
    alignSelf: "center",
    borderRadius: 20,
    // borderColor: "black",
    // borderWidth: 1,

    shadowOpacity: 0.25,
    shadowRadius: 3.04,
    elevation: 5,

    marginBottom: 60,
  },

  image: {
    flex: 1,
    justifyContent: "center",
  },
});
