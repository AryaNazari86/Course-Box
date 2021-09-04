import React from "react";
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles } from "../shared/globalStyle";

export default function Profile({ accountName, accountPicture, accountCoursesVal, accountFollowersVal, accountParticipatedVal }) {
    return (
        <View>
            {/* Account Name And Icon Header */}
            <View style={styles.profileAccountHeader}>
                <Image source={require('../assets/Images/Default_Profile_Img.png')} style={styles.profileAccountImage}></Image>
                <Text style={{ ...styles.profileAccountName, ...globalStylesStyles.TitleText }}>{accountName}</Text>
            </View>

            {/* Account Details */}
            <View style={styles.profileDetailHeader}>
                <View>
                    <Text style={styles.profileDetailText}>{accountCoursesVal}</Text>
                    <Text>Courses</Text>
                </View>
                <View style={styles.profileDetail}>
                    <Text style={styles.profileDetailText}>{accountFollowersVal}</Text>
                    <Text>Followers</Text>
                </View>
                <View style={styles.profileDetail}>
                    <Text style={styles.profileDetailText}>{accountParticipatedVal}</Text>
                    <Text>Participated</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    profileAccountImage: {
        width: 80,
        height: 80
    },
    profileAccountHeader: {
        paddingTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    },
    profileAccountName: {
        paddingLeft: 20
    },


    profileDetailHeader: {
        flexDirection: 'row',
        alignSelf: 'center',
        paddingTop: 30,
    },
    profileDetail: {
        paddingLeft: 30,
    },
    profileDetailText: {
        textAlign: 'center'
    }
});