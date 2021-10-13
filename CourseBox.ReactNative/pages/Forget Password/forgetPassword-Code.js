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

export default function ForgetPassword_Code({ navigation }) {
  // * The function for going to forget password, reset password
  const passwordPress = () => {
    navigation.navigate("Password");
  };

  const ForgetSchema = yup.object({
    code: yup.string().required().min(4),
  });

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
          initialValues={{ code: "" }}
          validationSchema={ForgetSchema}
          onSubmit={(values, actions) => {
            passwordPress(values);
            actions.resetForm();
          }}
        >
          {(props) => (
            <View style={globalStyles.container}>
              <Text style={globalStyles.normalText}>
                Enter the code we sent to your email
              </Text>
              {/* Code Input*/}
              <View style={globalStyles.textInputView}>
                <TextInput
                  style={globalStyles.inputComp}
                  placeholder="Code"
                  onChangeText={props.handleChange("code")}
                  value={props.values.code}
                  onBlur={props.handleBlur("code")}
                  placeholderTextColor="#A8DADC"
                />
              </View>

              <Text style={globalStyles.errorText}>
                {props.touched.code && props.errors.code}
              </Text>

              {/* Continue Button */}
              <TouchableOpacity
                style={globalStyles.button}
                onPress={props.handleSubmit}
              >
                <Text style={globalStyles.buttonText}>Continue</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({});
