import React, { useState } from 'react';
import Tab from './routes/tabs';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const getFonts = () => Font.loadAsync({
  'roboto-bold': require('./assets/Fonts/Roboto-Bold.ttf'),
  'roboto-light': require('./assets/Fonts/Roboto-Light.ttf'),
  'roboto-regular': require('./assets/Fonts/Roboto-Regular.ttf'),
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
