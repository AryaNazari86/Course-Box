import React from "react";
import { StyleSheet, View, Text, Image } from 'react-native';
import { golbalStyles } from "../shared/globalStyle";

export default function Profile({ accountName, accountPicture }) {
    return (
        <View style={styles.profileDetailHeader}>
            <Image source={require('../assets/Images/Default_Profile_Img.png')} style={styles.profileDetailImage}></Image>
            <Text style={styles.profileDetailText}>{accountName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    profileDetailImage: {
        width: 80,
        height: 80
    },
    profileDetailHeader: {
        paddingTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    },
    profileDetailText: {
        paddingLeft: 20,
        fontSize: 24,
    }
});