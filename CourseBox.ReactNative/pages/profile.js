import React from "react";
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles } from "../shared/globalStyle";

export default function Profile({ accountName, accountPicture, accountCoursesVal, accountFollowersVal, accountParticipatedVal, profileAccountDescription }) {
    return (
        // How to use:

        //     <Profile accountName='Ilia Soleymani'
        //          accountCoursesVal='3'
        //          accountFollowersVal='567K'
        //          accountParticipatedVal='36'
        //          profileAccountDescription='This is an account Description!!!'
        //      />


        <View>
            {/* Account Name And Icon Header */}
            <View style={styles.profileAccountHeader}>
                <Image source={require('../assets/Images/Default_Profile_Img.png')} style={styles.profileAccountImage}></Image>
                <Text style={{ ...styles.profileAccountName, ...globalStyles.TitleText }}>{accountName}</Text>

            </View>

            {/* Account Description */}
            <View style={styles.profileDescriptionHeader}>
                <Text style={styles.profileDescriptionText}>{profileAccountDescription}</Text>

            </View>

            {/* Account Details */}
            <View style={styles.profileDetailHeader}>
                <View>
                    <Text style={styles.profileDetailText}>{accountCoursesVal}</Text>
                    <Text style={styles.profileDetailText}>Courses</Text>
                </View>
                <View style={styles.profileDetail}>
                    <Text style={styles.profileDetailText}>{accountFollowersVal}</Text>
                    <Text style={styles.profileDetailText}>Followers</Text>
                </View>
                <View style={styles.profileDetail}>
                    <Text style={styles.profileDetailText}>{accountParticipatedVal}</Text>
                    <Text style={styles.profileDetailText}>Participated</Text>
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
        alignItems: 'center',
        alignSelf: 'center'
    },
    profileAccountName: {
        paddingLeft: 20
    },


    profileDescriptionHeader: {
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        paddingTop: 10,
    },
    profileDescriptionText: {
        fontSize: 13
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
        textAlign: 'center',
        fontSize: 17,
    }
});