import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { globalStyles } from "../shared/globalStyle";
import Header from "../shared/header";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as yup from "yup";
import * as UserService from "../Services/userService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Snackbar } from "react-native-paper";

import { Dimensions } from "react-native";
import { theme } from "../Themes/theme";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function SignIn({ navigation }) {
  const loginSchema = yup.object({
    email: yup.string().required().min(4),
    password: yup.string().required().min(5),
  });

  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState();

  const signInPress = async (values) => {
    try {
      UserService.Login(values).then(async (result) => {
        if (result.successful) {
          result.token.then(async (userToken) => {
            const token = userToken.token;
            console.log(token);
            UserService.GetUserDetails(token).then(async (userDetails) => {
              if (userDetails.successful) {
                userDetails.data.then(async (data) => {
                  await AsyncStorage.setItem(
                    "userDetails",
                    JSON.stringify(data)
                  ).catch(() => {
                    setShowResult(true);
                    setResult(userDetails.response);
                  });
                });
              } else {
                setShowResult(true);
                setResult(userDetails.response);
              }
            });
            await AsyncStorage.setItem("token", token);
            await AsyncStorage.setItem("login", "true");
            navigation.navigate("Tab");
          });
        } else {
          setShowResult(true);
          setResult(result.response);
        }
      });
    } catch (error) {
      setShowResult(true);
      setResult("Error with connecting to server...");
    }
  };

  const forgetPress = () => {
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
      <View style={{ flex: 1 }}>
        <Header
          title="Sign In"
          backButton={true}
          backAction={() => navigation.goBack()}
          height={60}
        />
        <ImageBackground
          source={require("../assets/Images/Backgrounds/acf4d023e1b9ff3a285d5cab92433f07.jpg")}
          resizeMode="cover"
          style={styles.image}
        >
          <Formik
            initialValues={{ code: "" }}
            validationSchema={loginSchema}
            onSubmit={(values, actions) => {
              signInPress(values);
              actions.resetForm();
            }}
          >
            {(props) => (
              <View style={{ ...globalStyles.container, ...styles.container }}>
                {/* Email */}
                <View style={{ ...globalStyles.textInputView, marginTop: 20 }}>
                  <TextInput
                    style={globalStyles.inputComp}
                    placeholder="Email"
                    onChangeText={props.handleChange("email")}
                    value={props.values.email}
                    onBlur={props.handleBlur("email")}
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
                    secureTextEntry={hidePass}
                    onChangeText={props.handleChange("password")}
                    value={props.values.password}
                    onBlur={props.handleBlur("password")}
                    placeholderTextColor={theme.textColor2}
                    maxLength={100}
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
    alignSelf: "center",
    borderRadius: 20,

    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 60,
  },

  image: {
    flex: 1,
    justifyContent: "center",
  },
});
