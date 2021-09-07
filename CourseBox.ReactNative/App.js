import React, { useState } from 'react';
import Tab from './routes/tabs';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

// Test Pages
import SignUp from './pages/signup';

const getFonts = () => Font.loadAsync({
  'rubik-bold': require('./assets/Fonts/Rubik-Bold.ttf'),
  'rubik-light': require('./assets/Fonts/Rubik-Light.ttf'),
  'rubik-regular': require('./assets/Fonts/Rubik-Regular.ttf'),
});

export default function App() {
  // When App Starts, fonts are not loaded.
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      // Renders Tab Navigation.
      <Tab />
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
