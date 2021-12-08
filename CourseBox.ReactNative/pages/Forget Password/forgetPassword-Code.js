import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { globalStyles } from "../../shared/globalStyle";
import Header from "../../shared/header";
import { Formik } from "formik";
import * as yup from "yup";
import { theme } from "../../Themes/theme";

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
      <View style={{ flex: 1 }}>
        <Header
          title="Forget Password"
          backButton={true}
          backAction={() => navigation.goBack()}
          height={60}
        />
        <ImageBackground
          source={require("../../assets/Images/Backgrounds/wp2003036.jpg")}
          resizeMode="cover"
          style={styles.image}
        >
          <Formik
            initialValues={{ code: "" }}
            validationSchema={ForgetSchema}
            onSubmit={(values, actions) => {
              passwordPress(values);
              actions.resetForm();
            }}
          >
            {(props) => (
              <View style={{ ...globalStyles.container, ...styles.container }}>
                <Text
                  style={{
                    ...globalStyles.headerTitle,
                    ...globalStyles.smallTitle,
                    width: 300,
                    textAlign: "center",
                  }}
                >
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
                    placeholderTextColor={theme.textColor2}
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
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
  },

  container: {
    width: 370,
    alignSelf: "center",
    borderRadius: 20,

    shadowOpacity: 0.25,
    shadowRadius: 3.04,
    elevation: 5,

    marginBottom: 60,
  },
});
