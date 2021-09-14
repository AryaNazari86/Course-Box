import React, { useState } from 'react';
import Tab from './routes/tabs';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import 'react-native-gesture-handler';

// Test Pages
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import CoursePreview from './pages/coursePreview';
import ForgetPassword_Email from './pages/Forget Password/forgetPassword-Email';
import ForgetPassword_Code from './pages/Forget Password/forgetPassword-Code';
import ForgetPassword_Password from './pages/Forget Password/forgetPassword-Password';
import SplashStack from './routes/splashStack';
import Search from './pages/search';
const getFonts = () => Font.loadAsync({
  'comfortaa-bold': require('./assets/Fonts/Comfortaa-Bold.ttf'),
  'comfortaa-light': require('./assets/Fonts/Comfortaa-Light.ttf'),
  'comfortaa-regular': require('./assets/Fonts/Comfortaa-Regular.ttf'),
  'rubik-bold': require('./assets/Fonts/Rubik-Bold.ttf'),
  'rubik-light': require('./assets/Fonts/Rubik-Light.ttf'),
  'rubik-regular': require('./assets/Fonts/Rubik-Regular.ttf'),
});

// * A test function
const testFunc = () => {
  console.log('Test success!')
}

export default function App() {
  // When App Starts, fonts are not loaded.
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <SplashStack />
    );
  }
  else {
    return (
      <AppLoading
        startAsync={getFonts}
        onError={(e) => console.log(e)}
        onFinish={() => setFontsLoaded(true)} />
    );
  }
}
