import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../../shared/globalStyle";
import Header from "../../shared/header";
import { Formik } from "formik";
import * as yup from "yup";

export default function ForgetPassword_Email({ navigation }) {
  // * The function for going to the forget password code page
  const codePress = () => {
    navigation.navigate("Code");
  };

  const ForgetSchema = yup.object({
    email: yup.string().required().min(5),
  });

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      style={styles.container}
    >
      <View>
        {/* * The header */}
        <Header
          title="Forget Password"
          backButton={true}
          backAction={() => navigation.goBack()}
          height={60}
        />
        <Formik
          initialValues={{ email: "" }}
          validationSchema={ForgetSchema}
          onSubmit={(values, actions) => {
            codePress(values);
            actions.resetForm();
          }}
        >
          {(props) => (
            <View style={styles.container}>
              {/* Email Input */}
              <View style={styles.textInputView}>
                <TextInput
                  style={styles.input}
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

              {/* Continue Button */}
              <TouchableOpacity style={styles.continueButton}>
                <Text style={styles.continueText} onPress={props.handleSubmit}>
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  // Container of page
  container: {
    alignItems: "center",
    backgroundColor: "#EDF2F4",
  },

  // The text input
  input: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    width: 330,
    paddingLeft: 20,
    fontSize: 18,
    fontFamily: "rubik-regular",
  },
  // The view covering the text input
  textInputView: {
    borderWidth: 1,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    height: 50,
    backgroundColor: "#A8DADC",
  },
  // The continue Button
  continueButton: {
    backgroundColor: "#EF233C",
    width: 330,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  // The text of confirm button
  continueText: {
    fontSize: 25,
    color: "white",
    fontFamily: "rubik-bold",
  },
});
