import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import "react-native-gesture-handler";

//Check Internet Connection
import CheckConnection from "./Network/checkConnection";

// Test Pages
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import CoursePreview from "./pages/coursePreview";
import ForgetPassword_Email from "./pages/Forget Password/forgetPassword-Email";
import ForgetPassword_Code from "./pages/Forget Password/forgetPassword-Code";
import ForgetPassword_Password from "./pages/Forget Password/forgetPassword-Password";
import Search from "./pages/search";
import { InteractionManager, StatusBar } from "react-native";
import { Snackbar } from "react-native-paper";
import Splash from "./pages/splash";
import SettingsPage from "./pages/settings";
import Tabs from "./routes/tabs";
import LessonPreview from "./pages/lessonPreview";
import ProfileStack from "./routes/profileStack";
import SplashStack from "./routes/splashStack";
import CourseCreation from "./pages/courseCreation";
import HomeStack from "./routes/homeStack";

import { theme } from "./Themes/theme";

const getFonts = () =>
  Font.loadAsync({
    "comfortaa-bold": require("./assets/Fonts/Comfortaa-Bold.ttf"),
    "comfortaa-light": require("./assets/Fonts/Comfortaa-Light.ttf"),
    "comfortaa-regular": require("./assets/Fonts/Comfortaa-Regular.ttf"),
    "rubik-bold": require("./assets/Fonts/Rubik-Bold.ttf"),
    "rubik-light": require("./assets/Fonts/Rubik-Light.ttf"),
    "rubik-regular": require("./assets/Fonts/Rubik-Regular.ttf"),
    "courier-regular": require("./assets/Fonts/CourierPrime-Regular.ttf"),
    "courier-bold": require("./assets/Fonts/CourierPrime-Bold.ttf"),
  });

export default function App() {
  // When Internet disconnected, it's false.
  const [isConnected, setIsConnected] = useState(false);
  // When app loaded, check internet.
  InteractionManager.runAfterInteractions(() => {
    CheckConnection((isConnected) => setIsConnected(isConnected));
  });

  // When App Starts, fonts are not loaded.
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    if (isConnected) {
      return (
        <NavigationContainer>
          <StatusBar backgroundColor={theme.color2} barStyle="light-content" />
          <SplashStack />
          {/* <HomeStack /> */}
        </NavigationContainer>
      );
    } else {
      return <Splash disconnected={true} />;
    }
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onError={(e) => console.log(e)}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }
}
