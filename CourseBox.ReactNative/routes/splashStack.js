import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "../pages/splash";
import SignIn from "../pages/signin";
import SignUp from "../pages/signup";
import ForgetPassword_Email from "../pages/Forget Password/forgetPassword-Email";
import ForgetPassword_Code from "../pages/Forget Password/forgetPassword-Code";
import ForgetPassword_Password from "../pages/Forget Password/forgetPassword-Password";
import Tabs from "./tabs";

const Stack = createStackNavigator();

export default function SplashStack() {
  return (
    <Stack.Navigator
      screenOptions={({ route, navigation }) => ({
        headerMode: "none",
        cardStyle: { backgroundColor: "#141D28" },
      })}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Tab" component={Tabs} />
      <Stack.Screen name="Email" component={ForgetPassword_Email} />
      <Stack.Screen name="Code" component={ForgetPassword_Code} />
      <Stack.Screen name="Password" component={ForgetPassword_Password} />
    </Stack.Navigator>
  );
}
