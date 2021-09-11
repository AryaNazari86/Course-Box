import React from "react";
import { Appbar } from "react-native-paper";
import { globalStyles } from "../shared/globalStyle";

export default function Header({ title, subtitle, backButton = false, backAction }) {
    const titleAlignment = backAction ? 'left' : 'center';
    // If there is a back button for navigating to the previous screen:
    if (backButton) {
        return (
            <Appbar.Header style={globalStyles.header}>
                <Appbar.BackAction onPress={backAction} />
                <Appbar.Content
                    title={title}
                    subtitle={subtitle}
                    color="#14213D"
                    titleStyle={[{textAlign: titleAlignment}, globalStyles.headerTitle]}
                    subtitleStyle={globalStyles.headerSubtitle} />
            </Appbar.Header>
        );
    }
    // If there isn't a back button for navigating to the previous screen:
    return (
        <Appbar.Header style={globalStyles.header}>
            <Appbar.Content
                title={title}
                subtitle={subtitle}
                color="#14213D"
                titleStyle={[{textAlign: titleAlignment}, globalStyles.headerTitle]}
                subtitleStyle={globalStyles.headerSubtitle} />
        </Appbar.Header>
    );
}