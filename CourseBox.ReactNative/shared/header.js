import React, { useRef } from "react";
import { Pressable } from "react-native";
import { Appbar } from "react-native-paper";
import LottieView from 'lottie-react-native';
import { globalStyles } from "../shared/globalStyle";

export default function Header({ title, backButton = false, backAction,
    fontFamily = 'rubik-light', height = 45 }) {

    const backAnimation = useRef(null);

    const backButtonClicked = () => {
        backAnimation.current.play();
    };

    const titleAlignment = backAction ? 'left' : 'center';

    // If there is a back button for navigating to the previous screen:
    if (backButton) {
        return (
            <Appbar.Header style={[{ height: height }, globalStyles.header]}>
                <Pressable onPress={() => backButtonClicked()}>
                    <LottieView
                        ref={backAnimation}
                        style={globalStyles.headerBackAnimation}
                        loop={false}
                        duration={700}
                        onAnimationFinish={() => backAction()}
                        source={require('../assets/Animations/back.json')}
                    />
                </Pressable>
                <Appbar.Content
                    title={title}
                    color="#14213D"
                    titleStyle={[{ textAlign: titleAlignment, fontFamily: fontFamily }, globalStyles.headerTitle]} />
            </Appbar.Header>
        );
    }

    // If there isn't a back button for navigating to the previous screen:
    return (
        <Appbar.Header style={[{ height: height }, globalStyles.header]}>
            <Appbar.Content
                title={title}
                color="#14213D"
                titleStyle={[{ textAlign: titleAlignment, fontFamily: fontFamily }, globalStyles.headerTitle]} />
        </Appbar.Header>
    );
}