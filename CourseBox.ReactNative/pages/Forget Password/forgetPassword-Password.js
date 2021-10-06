import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../../shared/globalStyle";
import Header from "../../shared/header";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as yup from "yup";

export default function ForgetPassword_Password({ navigation }) {
  const [password, setPassword] = useState("");

  // * Set of yup rules for the text input
  const PasswordSchema = yup.object({
    Password: yup.string().required().min(5).max(100),
    confirmPassword: yup
      .string()
      .required()
      .min(5)
      .max(100)
      .oneOf([yup.ref("Password"), null], "Passwords don't match!"),
  });

  // * The hide password state
  const [hidePass, setHidePass] = useState(true);
  // * The hide password icon state
  const [hidePassIcon, setHidePassIcon] = useState("eye-off");

  // * The function that toggles the visibility of password
  const hidePassFunc = () => {
    if (hidePass) {
      // Make false
      setHidePass(false);
      setHidePassIcon("eye-off");
    } else {
      // Make true
      setHidePass(true);
      setHidePassIcon("eye");
    }
  };

  // * The hide confirm password state
  const [hidePass2, setHidePass2] = useState(true);
  // * The hide confirm password icon state
  const [hidePassIcon2, setHidePassIcon2] = useState("eye-off");

  // * The function that toggles the visibility of confirm password
  const hidePassFunc2 = () => {
    if (hidePass2) {
      // Make false
      setHidePass2(false);
      setHidePassIcon2("eye-off");
    } else {
      // Make true
      setHidePass2(true);
      setHidePassIcon2("eye");
    }
  };

  const signInPress = () => {
    console.log("Hi");
    navigation.navigate("SignIn");
  };
  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      style={globalStyles.container}
    >
      <View>
        <Header
          title="Forget Password"
          backButton={true}
          backAction={() => navigation.goBack()}
          height={60}
        />
        <Formik
          initialValues={{ Password: "", confirmPassword: "" }}
          validationSchema={PasswordSchema}
          onSubmit={(values, actions) => {
            signInPress(values);
            actions.resetForm();
          }}
        >
          {(props) => (
            <View style={globalStyles.container}>
              {/* Password */}
              <View style={globalStyles.textInputView}>
                <TextInput
                  style={{ ...globalStyles.inputComp, ...styles.input }}
                  placeholder="New Password"
                  onChangeText={props.handleChange("Password")}
                  value={props.values.Password}
                  onBlur={props.handleBlur("Password")}
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
                {props.touched.Password && props.errors.Password}
              </Text>

              {/* Confirm Password */}
              <View style={globalStyles.textInputView}>
                <TextInput
                  style={{ ...globalStyles.inputComp, ...styles.input }}
                  placeholder="Confirm New Password"
                  onChangeText={props.handleChange("confirmPassword")}
                  value={props.values.confirmPassword}
                  onBlur={props.handleBlur("confirmPassword")}
                  secureTextEntry={hidePass2}
                  placeholderTextColor={"black"}
                />
                <TouchableOpacity onPress={hidePassFunc2}>
                  <MaterialCommunityIcons
                    name={hidePassIcon2}
                    size={30}
                    color="black"
                    style={globalStyles.hideIcon}
                  />
                </TouchableOpacity>
              </View>

              <Text style={globalStyles.errorText}>
                {props.touched.confirmPassword && props.errors.confirmPassword}
              </Text>
              {/* Continue Button */}
              {/* TODO: Only allow user to continue if they meet the rules */}
              <TouchableOpacity
                style={globalStyles.button}
                onPress={props.handleSubmit}
              >
                <Text style={globalStyles.buttonText}>Continue</Text>
              </TouchableOpacity>

              <Text style={globalStyles.emptySpacer}>Code Rangers®</Text>
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
