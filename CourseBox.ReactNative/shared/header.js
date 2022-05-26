import React, { useRef } from "react";
import { Image, Pressable, TouchableOpacity, Text } from "react-native";
import { Appbar, TouchableRipple } from "react-native-paper";
import LottieView from "lottie-react-native";
import { globalStyles } from "../shared/globalStyle";
import { theme } from "../Themes/theme";
import API_ADDRESS from "../Services/userService";

export default function Header({
  title,
  backButton = false,
  backAction,
  profileButton = false,
  profileAction,
  headerIcon = false,
  headerIconSource,
  fontFamily = "comfortaa-bold",
  height = 45,
  buttons = [],
  titleAlignment = "left",
  backgroundColor = theme.color2,
}) {
  return (
    <Appbar.Header
      style={[
        { height: height, backgroundColor: backgroundColor, marginTop: -5 },
        globalStyles.header,
      ]}
    >
      {backButton ? <Appbar.BackAction onPress={() => backAction()} /> : null}
      {headerIcon ? (
        <Image
          source={headerIconSource}
          style={[{ marginEnd: -15 }, globalStyles.headerIcon]}
        />
      ) : null}
      <Appbar.Content
        title={title}
        color="#14213D"
        titleStyle={[
          { fontFamily: fontFamily, textAlign: titleAlignment },
          globalStyles.headerTitle,
        ]}
      />
      {buttons.map((value, index) => {
        return (
          <Appbar.Action
            icon={value.icon}
            onPress={value.onPress}
            key={index}
          />
        );
      })}
      {profileButton ? (
        <TouchableOpacity onPress={profileAction}>
          <Image
            source={{
              uri: "http://" + API_ADDRESS + "/static/avatars/default.png",
            }}
            style={[{ marginEnd: 5 }, globalStyles.headerIcon]}
          />
        </TouchableOpacity>
      ) : null}
    </Appbar.Header>
  );
}
