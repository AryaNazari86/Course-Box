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
import PassNavigator from './routes/PasswordStack';
import coursePreviewStack from './routes/coursePreviewStack';
import Search from './pages/search';
const getFonts = () => Font.loadAsync({
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
      // Renders Tab Navigation
      <PassNavigator />
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
