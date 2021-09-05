import React, { useState } from "react";
import { StyleSheet, View, Text, Image, FlatList, ScrollView, SafeAreaView } from 'react-native';
import { globalStyles } from "../shared/globalStyle";
import Header from '../shared/header';
import CourseBox from "../components/courseBox";

export default function Profile() {

    // * The list of user's made courses
    const [madeCourses, setMadeCourses] = useState([
        { title: 'Hacking', category: 'Programming', author: '@Ilia', participants: '10', likes: '10', description: 'something ...', image: require(`../assets/Images/_111434467_gettyimages-1143489763.jpg`), key: 1 },
        { title: 'Hacking', category: 'Programming', author: '@Ilia', participants: '10', likes: '10', description: 'something ...', image: require(`../assets/Images/_111434467_gettyimages-1143489763.jpg`), key: 2 },
        { title: 'Hacking', category: 'Programming', author: '@Ilia', participants: '10', likes: '10', description: 'something ...', image: require(`../assets/Images/_111434467_gettyimages-1143489763.jpg`), key: 3 },
    ])

    // * The list of user's participated courses

    const [participatedCourses, setParticipatedCourses] = useState([
        { title: 'Hacking', category: 'Programming', author: '@Ilia', participants: '10', likes: '10', description: 'something ...', image: require(`../assets/Images/_111434467_gettyimages-1143489763.jpg`), key: 1 },
        { title: 'Hacking', category: 'Programming', author: '@Ilia', participants: '10', likes: '10', description: 'something ...', image: require(`../assets/Images/_111434467_gettyimages-1143489763.jpg`), key: 2 },
        { title: 'Hacking', category: 'Programming', author: '@Ilia', participants: '10', likes: '10', description: 'something ...', image: require(`../assets/Images/_111434467_gettyimages-1143489763.jpg`), key: 3 },
    ])


    // Profile Page Variables
    const accountName = 'Ilia Soleymani';
    const profileAccountDescription = 'This is an account Description!!!';

    const accountCoursesVal = 3;
    const accountFollowersVal = '53k';
    const accountParticipatedVal = 8;

    const userName = 'IAmIlia';

    return (
        <View>
            {/* Header */}
            <Header title="Profile" />
            < ScrollView >

                {/* Account Name And Icon Header */}
                < View style={styles.profileAccountHeader} >
                    <Image source={require('../assets/Images/Default_Profile_Img.png')} style={styles.profileAccountImage}></Image>
                    <Text style={{ ...styles.profileAccountName, ...globalStyles.TitleText }}>{accountName}</Text>

                </View >

                {/* Username */}
                <View style={styles.userName}>
                    <Text style={styles.userName}>@</Text>
                    <Text style={styles.userName}>{userName}</Text>
                </View>

                {/* Account Description */}
                < View style={styles.profileDescriptionHeader} >
                    <Text style={styles.profileDescriptionText}>{profileAccountDescription}</Text>

                </View >

                {/* Account Details */}
                < View style={styles.profileDetailHeader} >
                    {/* Ammount of made courses */}
                    <View>
                        <Text style={styles.profileDetailText}>{accountCoursesVal}</Text>
                        <Text style={styles.profileDetailText}>Courses</Text>
                    </View>
                    {/* Ammount of followers */}
                    <View style={styles.profileDetail}>
                        <Text style={styles.profileDetailText}>{accountFollowersVal}</Text>
                        <Text style={styles.profileDetailText}>Followers</Text>
                    </View>
                    {/* Ammount of made participated courses */}
                    <View style={styles.profileDetail}>
                        <Text style={styles.profileDetailText}>{accountParticipatedVal}</Text>
                        <Text style={styles.profileDetailText}>Participated</Text>
                    </View>
                </View >

                {/* Made Courses */}
                < View style={styles.madeCoursesHeader} >
                    <Text style={styles.madeCoursesText}>Made Courses</Text>
                    <View style={styles.madeCoursesList}>
                        {/* Made courses list */}
                        {madeCourses.map((item, index) => (
                            <CourseBox item={item} />
                        ))}

                    </View>
                </View >

                {/* Participated Courses */}
                < View style={styles.madeCoursesHeader} >
                    <Text style={styles.madeCoursesText}>Participated Courses</Text>
                    <View style={styles.madeCoursesList}>
                        {/* Participated course list */}
                        {participatedCourses.map((item, index) => (
                            <CourseBox item={item} />
                        ))}

                    </View>
                </View >



                {/* Empty Spacer */}
                <Text style={globalStyles.emptySpacer}>Code Rangers®</Text>

            </ScrollView >
        </View>
    )
}

const styles = StyleSheet.create({
    // * Profile name and image
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
        paddingLeft: 20,

        fontFamily: 'roboto-bold'
    },

    // * Username
    userName: {
        flexDirection: 'row',
        alignSelf: 'center',
        fontFamily: 'roboto-light'
    },

    // * Profile Description
    profileDescriptionHeader: {
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        paddingTop: 10,
    },
    profileDescriptionText: {
        fontSize: 13
    },

    // * Profile Description
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
    },

    // * Courses
    madeCoursesText: {
        fontSize: 20,
        paddingTop: 30,
    },
    madeCoursesHeader: {
        alignSelf: 'center',
        alignItems: 'center',
        flex: 1,
    },
    madeCoursesList: {
        flex: 1
    },



});