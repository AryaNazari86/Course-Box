import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import React from "react";

import ForgetPassword_Email from "../pages/Forget Password/forgetPassword-Email";
import ForgetPassword_Code from "../pages/Forget Password/forgetPassword-Code";
import ForgetPassword_Password from "../pages/Forget Password/forgetPassword-Password";

const screens = {
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