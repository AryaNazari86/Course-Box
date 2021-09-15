import React, { useState } from "react";
import { StyleSheet, View, Text, Image, FlatList, ScrollView, SafeAreaView } from 'react-native';
import { globalStyles } from "../shared/globalStyle";
import Header from '../shared/header';
import CourseBox from "../components/courseBox";

import CoursesCarousel from '../components/Carousel/coursesCarousel';
import courses from "../data/courses";

export default function Profile({ navigation }) {

    // * The list of user's made courses
    const [madeCourses, setMadeCourses] = useState([
        { title: 'Hacking', category: 'Programming', author: '@Ilia', participants: '10', likes: '10', description: 'something ...', image: require(`../assets/Images/hacking_course.jpg`), key: '2' },
        { title: 'Javascript Beginner Course', category: 'Programming', author: '@Ilia', participants: '10', likes: '10', description: 'something ...', image: require(`../assets/Images/Javascript_Course.png`), key: '3' },
        { title: 'HTML Beginner Course', category: 'Programming', author: '@Ilia', participants: '10', likes: '10', description: 'something ...', image: require(`../assets/Images/HTML_Course.jpeg`), key: '4' },
        { title: 'CSS Beginner Course', category: 'Programming', author: '@Ilia', participants: '10', likes: '10', description: 'something ...', image: require(`../assets/Images/CSS_Course.png`), key: '5' }, ,
    ])

    // * The list of user's participated courses

    const [participatedCourses, setParticipatedCourses] = useState([
        { title: 'Dribbling', category: 'Sports', author: '@Arya', participants: '100', likes: '99', description: 'something ...', image: require(`../assets/Images/messi.jpeg`), key: '1' },
        { title: 'PyQT5 Course', category: 'Programming', author: '@Arya', participants: '10', likes: '10', description: 'something ...', image: require(`../assets/Images/PyQT5_Course.jpeg`), key: '6' },
        { title: 'C# Course', category: 'Programming', author: '@MHK', participants: '10', likes: '10', description: 'something ...', image: require(`../assets/Images/c-sharp-course.jpeg`), key: '7' },
        { title: 'Soccer for beginners', category: 'Sports', author: '@MHK', participants: '10', likes: '10', description: 'something ...', image: require(`../assets/Images/soccer_Course.jpeg`), key: '8' },
    ])


    // Profile Page Variables
    const profilePageValues = {
        accountName: 'Ilia soleymani',
        profileAccountDescription: 'This is an account Description!!!',
        accountCoursesVal: '4',
        accountFollowersVal: '63',
        accountParticipatedVal: '4',
        userName: 'Ilia'
    }

    return (
        <View>
            {/* Header */}
            <Header title="Profile"  height={60} />
            < ScrollView >

                {/* Account Name And Icon Header */}
                < View style={styles.profileAccountHeader} >
                    <Image source={require('../assets/Images/Default_Profile_Img.png')} style={styles.profileAccountImage}></Image>
                    <Text style={{ ...styles.profileAccountName, ...globalStyles.TitleText }}>{profilePageValues.accountName}</Text>

                </View >

                {/* Username */}
                <View style={styles.userName}>
                    <Text style={styles.userName}>@</Text>
                    <Text style={styles.userName}>{profilePageValues.userName}</Text>
                </View>

                {/* Account Description */}
                < View style={styles.profileDescriptionHeader} >
                    <Text style={styles.profileDescriptionText}>{profilePageValues.profileAccountDescription}</Text>

                </View >

                {/* Account Details */}
                < View style={styles.profileDetailHeader} >
                    {/* Ammount of made courses */}
                    <View>
                        <Text style={styles.profileDetailText}>{profilePageValues.accountCoursesVal}</Text>
                        <Text style={styles.profileDetailText}>Courses</Text>
                    </View>
                    {/* Ammount of followers */}
                    <View style={styles.profileDetail}>
                        <Text style={styles.profileDetailText}>{profilePageValues.accountFollowersVal}</Text>
                        <Text style={styles.profileDetailText}>Followers</Text>
                    </View>
                    {/* Ammount of made participated courses */}
                    <View style={styles.profileDetail}>
                        <Text style={styles.profileDetailText}>{profilePageValues.accountParticipatedVal}</Text>
                        <Text style={styles.profileDetailText}>Participated</Text>
                    </View>
                </View >

                {/* Made Courses */}
                < View style={styles.madeCoursesHeader} >
                    <Text style={styles.madeCoursesText}>Made Courses</Text>
                    <CoursesCarousel courses={courses} navigation={navigation} dotesColor='#14213D' />
                </View >

                {/* Participated Courses */}
                < View style={styles.madeCoursesHeader}>
                    <Text style={styles.madeCoursesText}>Participated Courses</Text>
                    <CoursesCarousel courses={courses} navigation={navigation} dotesColor='#14213D' />
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
        width: 125,
        height: 125,
        borderRadius: 100,
        marginBottom: 10,
    },
    profileAccountHeader: {
        paddingTop: 40,
        alignItems: 'center',
        alignSelf: 'center'
    },
    profileAccountName: {
        fontFamily: 'rubik-bold'
    },

    // * Username
    userName: {
        flexDirection: 'row',
        alignSelf: 'center',
        fontFamily: 'rubik-light'
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
        textAlign: "center"
    },
    madeCoursesList: {
        flex: 1
    },



});