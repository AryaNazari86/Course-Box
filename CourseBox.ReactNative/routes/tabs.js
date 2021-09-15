import React, { useState } from 'react';
import { StyleSheet, Image, InteractionManager, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LottieView from 'lottie-react-native';
import HomeStack from './homeStack';
import SearchStack from './searchStack';
import ProfileStack from './profileStack';
import { globalStyles } from '../shared/globalStyle';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  // If loaded is false, show a loader.
  const [loaded, setLoaded] = useState(false);

  // When app loads this function is called.
  InteractionManager.runAfterInteractions(function () {
    setLoaded(true);
  });

  if (loaded) {
    return (
      <Tab.Navigator
        initialRouteName="HomeStack"
        screenOptions={{
          tabBarStyle: globalStyles.tabBar,
          headerShown: false
        }}>
        <Tab.Screen
          name="SearchStack"
          component={SearchStack}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => {
              const icon = focused
                ? require('../assets/Icons/search-focused.png')
                : require('../assets/Icons/search.png');
              return <Image style={{ height: 40, width: 40 }} source={icon} />;
            }
          }} />
        <Tab.Screen name="HomeStack"
          component={HomeStack}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => {
              const icon = focused
                ? require('../assets/Icons/house-focused.png')
                : require('../assets/Icons/house.png');
              return <Image style={{ height: 40, width: 40 }} source={icon} />;
            }
          }} />
        <Tab.Screen name="ProfileStack"
          component={ProfileStack}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => {
              const icon = focused
                ? require('../assets/Icons/user-focused.png')
                : require('../assets/Icons/user.png');
              return <Image style={{ height: 40, width: 40 }} source={icon} />;
            }
          }} />
      </Tab.Navigator>
    );

  }
  else {
    return (
      <View style={styles.loaderContainer}>
        <LottieView
          autoPlay={true}
          loop={true}
          style={styles.loader}
          source={require('../assets/Animations/loader2.json')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loader: {
    width: 200,
    height: 200,
  }
});