import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  InteractionManager,
} from "react-native";
import { globalStyles } from "../../shared/globalStyle";
import Header from "../../shared/header";

// Lottie Library
import LottieView from "lottie-react-native";
import SettingButton from "../../components/SettingButton/settingButton";

export default function SettingsPage({ navigation }) {
  // If loaded is false, show a loader.
  const [loaded, setLoaded] = useState(false);

  // When app loads this function is called.
  InteractionManager.runAfterInteractions(function () {
    setLoaded(true);
  });

  if (loaded) {
    return (
      <View>
        {/* Header */}
        <Header title="Settings" height={60} />
        <ScrollView style={globalStyles.appBackground}>
          <Text style={{ ...globalStyles.headerTitle, ...styles.headerText }}>
            Profile
          </Text>
          <View style={globalStyles.container}>
            <SettingButton buttonText={"Hi"} buttonStyle="Edit" />
            <SettingButton buttonText={"Profile Name"} buttonStyle="Edit" />
            <SettingButton buttonText={"Profile Name"} buttonStyle="Edit" />
          </View>
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View style={globalStyles.loaderContainer}>
        <LottieView
          autoPlay={true}
          loop={true}
          style={globalStyles.loader}
          source={require("../../assets/Animations/loader2.json")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    textAlign: "center",
    paddingTop: 20,
    fontSize: 22,
  },
  settingView: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 50,
    textAlign: "center",
  },
  settingText: {
    textAlign: "center",
  },
});
