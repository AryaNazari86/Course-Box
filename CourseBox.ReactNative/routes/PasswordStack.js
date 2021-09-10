import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import React from "react";

import SignIn from "../pages/signin";
import SignUp from "../pages/signup";
import ForgetPassword_Email from "../pages/Forget Password/forgetPassword-Email";
import ForgetPassword_Code from "../pages/Forget Password/forgetPassword-Code";
import ForgetPassword_Password from "../pages/Forget Password/forgetPassword-Password";
import Tab from "./tabs";

const screens = {
    SignUp: {
        screen: SignUp
    },
    SignIn: {
        screen: SignIn
    },
    Tab: {
        screen: Tab
    },
    Email: {
        screen: ForgetPassword_Email
    },
    Code: {
        screen: ForgetPassword_Code
    },
    Password: {
        screen: ForgetPassword_Password
    }
}

const PasswordStack = createStackNavigator(screens);

export default createAppContainer(PasswordStack)