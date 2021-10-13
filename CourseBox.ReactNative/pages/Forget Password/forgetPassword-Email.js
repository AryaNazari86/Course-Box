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
      style={globalStyles.container}
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
            <View style={globalStyles.container}>
              {/* Email Input */}
              <View style={globalStyles.textInputView}>
                <TextInput
                  style={globalStyles.inputComp}
                  placeholder="Email"
                  onChangeText={props.handleChange("email")}
                  value={props.values.email}
                  onBlur={props.handleBlur("email")}
                  placeholderTextColor="#A8DADC"
                />
              </View>

              <Text style={globalStyles.errorText}>
                {props.touched.email && props.errors.email}
              </Text>

              {/* Continue Button */}
              <TouchableOpacity style={globalStyles.button}>
                <Text
                  style={globalStyles.buttonText}
                  onPress={props.handleSubmit}
                >
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

const styles = StyleSheet.create({});
