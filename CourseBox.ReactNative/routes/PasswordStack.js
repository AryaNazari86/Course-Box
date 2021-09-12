import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import React from "react";
import { View } from "react-native";

import SignIn from "../pages/signin";
import SignUp from "../pages/signup";
import ForgetPassword_Email from "../pages/Forget Password/forgetPassword-Email";
import ForgetPassword_Code from "../pages/Forget Password/forgetPassword-Code";
import ForgetPassword_Password from "../pages/Forget Password/forgetPassword-Password";
import Tab from "./tabs";
import Header from "../shared/header";

const screens = {
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            headerShown: false
        }
    },
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            headerShown: false
        }
    },
    Tab: {
        screen: Tab,
        navigationOptions: {
            headerShown: false
        },
        headerLeft: () => null,
    },
    Email: {
        screen: ForgetPassword_Email,
        navigationOptions: {
            headerShown: false
        }
    },
    Code: {
        screen: ForgetPassword_Code,
        navigationOptions: {
            headerShown: false
        }
    },
    Password: {
        screen: ForgetPassword_Password,
        navigationOptions: {
            headerShown: false
        }
    }
}

const PasswordStack = createStackNavigator(screens);

export default createAppContainer(PasswordStack)