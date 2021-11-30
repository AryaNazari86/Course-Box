import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  InteractionManager,
  View,
  TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import HomeStack from "./homeStack";
import SearchStack from "./searchStack";
import ProfileStack from "./profileStack";
import { globalStyles } from "../shared/globalStyle";
// Lottie Animation
import LottieView from "lottie-react-native";
import { TouchableRipple } from "react-native-paper";
import { FontAwesome } from '@expo/vector-icons';

// Theme colors
import {theme} from '../Themes/theme';

const Tab = createBottomTabNavigator();
import { MaterialCommunityIcons } from '@expo/vector-icons';
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
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="SearchStack"
          component={SearchStack}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => {
              const icon = focused
                ? <View style={{ borderTopWidth: 2, borderTopColor: theme.color3, ...globalStyles.tabBarIcons }}><Feather name="search" size={40} color={theme.color3} /></View>
                : <View style={globalStyles.tabBarIcons}><Feather name="search" size={35} color={theme.color3} /></View>
              return icon;
            },
            tabBarButton: (props) => <TouchableRipple {...props} />,
          }}
        />
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => {
              const icon = focused
              ? <View style={{ borderTopWidth: 2, borderTopColor: theme.color3, ...globalStyles.tabBarIcons }}><Feather name="home" size={40} color={theme.color3} /></View>
              : <View style={globalStyles.tabBarIcons}><Feather name="home" size={35} color={theme.color3} /></View>
              return icon;
            },
            tabBarButton: (props) => <TouchableRipple {...props} />,
          }}
        />
        <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => {
              const icon = focused
                ? <View style={{ borderTopWidth: 2, borderTopColor: theme.color3, ...globalStyles.tabBarIcons}}><Feather name="user" size={40} color={theme.color3} /></View>
                : <View style={globalStyles.tabBarIcons }><Feather name="user" size={35} color={theme.color3} /></View>
              return icon;
              
            },
            tabBarButton: (props) => <TouchableRipple {...props} />,
          }}
        />
      </Tab.Navigator>
    );
  } else {
    return (
      <View style={globalStyles.loaderContainer}>
        <LottieView
          autoPlay={true}
          loop={true}
          style={globalStyles.loader}
          source={require("../assets/Animations/7751-load.json")}
        />
      </View>
    );
  }
}
