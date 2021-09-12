import React from "react";
import { Appbar } from "react-native-paper";
import { globalStyles } from "../shared/globalStyle";

export default function Header({ title, backButton = false, backAction,
    backgroundColor = '#fca311', textColor = '#14213D',
    fontFamily = 'rubik-light', height = 45 }) {

    const titleAlignment = backAction ? 'left' : 'center';

    // If there is a back button for navigating to the previous screen:
    if (backButton) {
        return (
            <Appbar.Header style={[{ backgroundColor: backgroundColor, height: height }, globalStyles.header]}>
                <Appbar.BackAction onPress={backAction} />
                <Appbar.Content
                    title={title}
                    color="#14213D"
                    titleStyle={[{ textAlign: titleAlignment, color: textColor, fontFamily: fontFamily }, globalStyles.headerTitle]} />
            </Appbar.Header>
        );
    }

    // If there isn't a back button for navigating to the previous screen:
    return (
        <Appbar.Header style={[{ backgroundColor: backgroundColor, height: height }, globalStyles.header]}>
            <Appbar.Content
                title={title}
                color="#14213D"
                titleStyle={[{ textAlign: titleAlignment, color: textColor, fontFamily: fontFamily }, globalStyles.headerTitle]} />
        </Appbar.Header>
    );
}