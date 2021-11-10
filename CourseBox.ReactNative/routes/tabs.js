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
import HomeStack from "./homeStack";
import SearchStack from "./searchStack";
import ProfileStack from "./profileStack";
import { globalStyles } from "../shared/globalStyle";
// Lottie Animation
import LottieView from "lottie-react-native";
import { TouchableRipple } from "react-native-paper";
import { FontAwesome } from '@expo/vector-icons';
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
                ? <FontAwesome name="search" size={40} color="#A8DADC" />
                : <FontAwesome name="search" size={30} color="#A8DADC" />
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
              ? <AntDesign name="home" size={45} color="#A8DADC" />
              : <AntDesign name="home" size={35} color="#A8DADC" />
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
                ? <MaterialCommunityIcons name="face-profile" size={40} color="#A8DADC" />
                : <MaterialCommunityIcons name="face-profile" size={30} color="#A8DADC" />
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
