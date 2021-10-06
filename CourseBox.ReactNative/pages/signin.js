import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../shared/globalStyle";
import Header from "../shared/header";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as yup from "yup";

export default function SignIn({ navigation }) {
  const loginSchema = yup.object({
    email: yup.string().required().min(4),
    password: yup.string().required().min(5).max(100),
  });

  const signInPress = () => {
    navigation.navigate("Tab");
  };

  const forgetPress = () => {
    console.log("Hi");
    navigation.navigate("Email");
  };

  const [hidePass, setHidePass] = useState(true);
  const [hidePassIcon, setHidePassIcon] = useState("eye-off");

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
        <Header
          title="Sign In"
          backButton={true}
          backAction={() => navigation.goBack()}
          height={60}
        />
        <Formik
          initialValues={{ code: "" }}
          validationSchema={loginSchema}
          onSubmit={(values, actions) => {
            signInPress(values);
            actions.resetForm();
          }}
        >
          {(props) => (
            <View style={globalStyles.container}>
              {/* Email */}
              <View style={globalStyles.textInputView}>
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
                  secureTextEntry={hidePass}
                  onChangeText={props.handleChange("password")}
                  value={props.values.password}
                  onBlur={props.handleBlur("password")}
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
                  Did you{" "}
                </Text>
                <TouchableOpacity onPress={forgetPress}>
                  <Text style={globalStyles.highlitedText}>
                    Forget your password?
                  </Text>
                </TouchableOpacity>
              </View>
              {/* Sign Up Button */}
              <TouchableOpacity
                style={globalStyles.button}
                onPress={props.handleSubmit}
              >
                <Text style={globalStyles.buttonText}>Sign In</Text>
              </TouchableOpacity>
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
