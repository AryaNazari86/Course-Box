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
} from "react-native";
import { globalStyles } from "../shared/globalStyle";
import Header from "../shared/header";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as yup from "yup";
import { setStatusBarStyle } from "expo-status-bar";

// * Holds important values for the use of the function
// const testFunc = () => {
//     console.log("Hello")
//   }

{
  /* <SignUp makeUser={testFunc} /> */
}

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
  // * Go to the tab componnent
  const signUpPress = () => {
    navigation.navigate("Tab");
  };
  // * Go to the sign in page
  const signInPress = () => {
    console.log("Hi");
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
      <View>
        <Header title="Sign Up" height={60} />
        <Formik
          initialValues={{ username: "", name: "", email: "", password: "" }}
          validationSchema={ReviewSchema}
          onSubmit={(values, actions) => {
            signUpPress(values);
            actions.resetForm();
          }}
        >
          {(props) => (
            <View style={globalStyles.container}>
              {/* Username */}
              <View style={globalStyles.textInputView}>
                <TextInput
                  style={globalStyles.inputComp}
                  placeholder="Username"
                  onChangeText={props.handleChange("username")}
                  value={props.values.username}
                  onBlur={props.handleBlur("username")}
                  placeholderTextColor={"black"}
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
                />
                <TouchableOpacity onPress={hidePassFunc}>
                  <MaterialCommunityIcons
                    name={hidePassIcon}
                    size={30}
                    color="black"
                    style={globalStyles.hideIcon}
                  />
                </TouchableOpacity>
              </View>

              <Text style={globalStyles.errorText}>
                {props.touched.password && props.errors.password}
              </Text>

              {/* Accept the privacy policy */}
              <View style={globalStyles.normalAndHighlightContainer}>
                <Text style={globalStyles.normalAndHighlightContainer}>
                  By signing up you accept the{" "}
                </Text>
                <TouchableOpacity>
                  <Text style={globalStyles.highlitedText}>
                    Terms of service{" "}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={globalStyles.normalAndHighlightContainer}>
                <Text style={globalStyles.normalAndHighlightContainer}>
                  and{" "}
                </Text>
                <TouchableOpacity>
                  <Text style={globalStyles.highlitedText}>Privacy Policy</Text>
                </TouchableOpacity>
              </View>
              {/* Sign Up Button */}
              <TouchableOpacity
                style={globalStyles.button}
                onPress={props.handleSubmit}
              >
                <Text style={globalStyles.buttonText}>Sign Up</Text>
              </TouchableOpacity>

              <View style={globalStyles.normalAndHighlightContainer}>
                <Text>Already have an account? </Text>
                <TouchableOpacity onPress={signInPress}>
                  <Text style={globalStyles.highlitedText}>Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  // The text input
  input: {
    width: 250,
  },
});
