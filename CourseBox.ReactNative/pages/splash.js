import React, { useState } from "react";
import { InteractionManager, StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
import { setStatusBarStyle } from "expo-status-bar";
import { Snackbar } from "react-native-paper";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Splash({ navigation, disconnected }) {
  // Set status bar light.
  setStatusBarStyle("light");
  const [nextPage, setNextPage] = useState("SignUp");
  // Check if user logged in.
  AsyncStorage.getItem("login").then(data => {
    if (data == "true") {
      setNextPage("Tab");
    }
  });
  // After page loaded, set timeout for going to signup page.
  InteractionManager.runAfterInteractions(() => {
    if (navigation != null || navigation != undefined) {
      setTimeout(function () {
        navigation.push(nextPage);
      }, 3000);
    }
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Course Box</Text>
      <LottieView
        autoPlay={true}
        style={styles.loader}
        loop={true}
        source={require("../assets/Animations/loader.json")}
      />
      <Text style={styles.poweredBy}>Made By Code Rangers</Text>
      <Snackbar style={styles.disconnected} visible={disconnected}>
        You are disconnected. Please check your internet connection.
      </Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#14213D",
  },
  title: {
    fontFamily: "comfortaa-bold",
    fontSize: 32,
    color: "#fff",
  },
  loader: {
    width: 200,
    height: 200,
  },
  disconnected: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "#f50a29",
  },
  poweredBy: {
    position: "absolute",
    bottom: 50,
    color: "#fff",
    fontFamily: "comfortaa-light",
  },
});
