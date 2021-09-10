import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import React from "react";

import ForgetPassword_Email from "../pages/Forget Password/forgetPassword-Email";
import ForgetPassword_Code from "../pages/Forget Password/forgetPassword-Code";
import ForgetPassword_Password from "../pages/Forget Password/forgetPassword-Password";

const screens = {
    Email: {
        screen: ForgetPassword_Email,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Recover Password' />,
            }
        }
    },
    Code: {
        screen: ForgetPassword_Code,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Recover Password' />,
            }
        }
    },
    Password: {
        screen: ForgetPassword_Password,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Recover Password' />,
            }
        }
    },
}

const PassStack = createStackNavigator(screens, {
    // Default
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 }
    }
});

export default PassStack;