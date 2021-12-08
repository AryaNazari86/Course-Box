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
import { globalStyles } from "../shared/globalStyle";
import Header from "../shared/header";

// Lottie Library
import LottieView from "lottie-react-native";
import SettingButton from "../components/SettingButton/settingButton";

export default function SettingsPage({ navigation }) {
  // If loaded is false, show a loader.
  const [loaded, setLoaded] = useState(false);

  // When app loads this function is called.
  InteractionManager.runAfterInteractions(function () {
    setLoaded(true);
  });

  const testFunc = () => {};

  const countries = ["Light", "Dark", "Auto"];
  const themes = ["Dark", "Dark2", "Light"];
  const language = ["English", "Farsi"];

  if (loaded) {
    return (
      <View>
        {/* Header */}
        <Header
          title="Settings"
          height={60}
          backButton={true}
          backAction={() => navigation.goBack()}
        />
        <ScrollView style={globalStyles.appBackground}>
          {/* Profile Settings */}
          <Text
            style={{
              ...styles.headerText,
              ...globalStyles.normalText,
              ...globalStyles.TitleText,
            }}
          >
            Profile
          </Text>
          <View style={{ ...globalStyles.container, marginTop: -15 }}>
            <SettingButton
              buttonText={"Profile Name"}
              buttonStyle="Edit"
              functionName={testFunc}
            />
            <SettingButton
              buttonText={"UserName"}
              buttonStyle="Edit"
              functionName={testFunc}
            />
            <SettingButton
              buttonText={"Profile Picture"}
              buttonStyle="Edit"
              functionName={testFunc}
            />
            {/* App theme */}
            <Text
              style={{
                ...styles.headerText,
                ...globalStyles.normalText,
                ...globalStyles.TitleText,
              }}
            >
              Theme
            </Text>
            <View style={globalStyles.container}>
              <SettingButton
                buttonText={"Theme"}
                buttonStyle="Dropdown"
                functionName={testFunc}
                dropDownList={themes}
              />
            </View>
            {/* Language */}
            <Text
              style={{
                ...styles.headerText,
                ...globalStyles.normalText,
                ...globalStyles.TitleText,
              }}
            >
              Language
            </Text>
            <View style={globalStyles.container}>
              <SettingButton
                buttonText={"Language"}
                buttonStyle="Dropdown"
                functionName={testFunc}
                dropDownList={language}
              />
            </View>
            {/* Empty Spacer */}
            {/* About */}
            <Text
              style={{
                ...styles.headerText,
                ...globalStyles.normalText,
                ...globalStyles.TitleText,
              }}
            >
              About Us
            </Text>
            <View style={{ ...globalStyles.container, marginTop: -16 }}>
              <SettingButton
                buttonText={"About Code Rangers"}
                buttonStyle="Edit"
                functionName={testFunc}
                editButtonName="View"
              />
              <SettingButton
                buttonText={"Terms of service"}
                buttonStyle="Edit"
                functionName={testFunc}
                editButtonName="View"
              />
              <SettingButton
                buttonText={"Privacy Policy"}
                buttonStyle="Edit"
                functionName={testFunc}
                editButtonName="View"
              />
            </View>
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
          source={require("../assets/Animations/7751-load.json")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    textAlign: "center",
    paddingTop: 35,
    paddingBottom: 10,

    fontSize: 20,
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
