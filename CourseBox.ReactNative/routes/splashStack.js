import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Splash from "../pages/splash";
import SignIn from "../pages/signin";
import SignUp from "../pages/signup";
import ForgetPassword_Email from "../pages/Forget Password/forgetPassword-Email";
import ForgetPassword_Code from "../pages/Forget Password/forgetPassword-Code";
import ForgetPassword_Password from "../pages/Forget Password/forgetPassword-Password";
import Tab from "./tabs";
import Header from "../shared/header";

// * Screens of the splash stack
const screens = {
    // The sign up page
    Splash: {
        screen: Splash,
        // Disables the stack header component
        navigationOptions: {
            headerShown: false
        }
    },
    // The sign up page
    SignUp: {
        screen: SignUp,
        // Disables the stack header component
        navigationOptions: {
            headerShown: false
        }
    },
    // The sign in page
    SignIn: {
        screen: SignIn,
        // Disables the stack header component
        navigationOptions: {
            headerShown: false
        }
    },
    // The tab componnent
    Tab: {
        screen: Tab,
        // Disables the stack header component
        navigationOptions: {
            headerShown: false
        },
        // ? Disables going back
        headerLeft: () => null,
    },
    // The forget password email page
    Email: {
        screen: ForgetPassword_Email,
        // Disables the stack header component
        navigationOptions: {
            headerShown: false
        }
    },
    // The forget password code page
    Code: {
        screen: ForgetPassword_Code,
        // Disables the stack header component
        navigationOptions: {
            headerShown: false
        }
    },
    // The forget password reset password page
    Password: {
        screen: ForgetPassword_Password,
        // Disables the stack header component
        navigationOptions: {
            headerShown: false
        }
    }
}

// * Creates the splash stack
const SplashStack = createStackNavigator(screens);

// * Exports the stack
export default createAppContainer(SplashStack)