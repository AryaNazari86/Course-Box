import React from "react";
import { Appbar } from "react-native-paper";
import { globalStyles } from "../shared/globalStyle";

export default function Header({ title, subtitle, backButton, backAction }) {
    if (backButton) {
        return (
            <Appbar.Header style={globalStyles.header}>
                <Appbar.BackAction onPress={() => backAction} />
                <Appbar.Content
                    title={title}
                    subtitle={subtitle}
                    color="#14213D"
                    titleStyle={globalStyles.headerTitle}
                    subtitleStyle={globalStyles.headerSubtitle} />
            </Appbar.Header>);
    }
    return (
        <Appbar.Header style={globalStyles.header} statusBarHeight="30">
            <Appbar.Content
                title={title}
                subtitle={subtitle}
                color="#14213D"
                titleStyle={globalStyles.headerTitle}
                subtitleStyle={globalStyles.headerSubtitle} />
        </Appbar.Header>
    );
}