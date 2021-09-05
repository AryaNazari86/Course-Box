import React, { useState } from "react";
import { StyleSheet, View, Text, Image, FlatList, ScrollView, SafeAreaView } from 'react-native';
import { globalStyles } from "../shared/globalStyle";
import Header from '../shared/header';
import CourseBox from "../components/courseBox";

export default function Profile() {

    // * The list of user's made courses
    const [madeCourses, setMadeCourses] = useState([
        { courseTitle: 'Javascript Beginner Course', key: 1 },
        { courseTitle: 'HTML Beginner Course', key: 2 },
        { courseTitle: 'CSS Beginner Course', key: 3 },
    ])

    // * The list of user's participated courses

    const [participatedCourses, setParticipatedCourses] = useState([
        { courseTitle: 'Python Beginner Course', key: 1 },
        { courseTitle: 'Java Beginner Course', key: 2 },
        { courseTitle: 'Golang Beginner Course', key: 3 },
    ])


    // Profile Page Variables
    const accountName = 'Ilia Soleymani';
    const profileAccountDescription = 'This is an account Description!!!';

    const accountCoursesVal = 3;
    const accountFollowersVal = '53k';
    const accountParticipatedVal = 8;

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
                            <View style={styles.coursesBox}>
                                <Image source={require('../assets/Images/_111434467_gettyimages-1143489763.jpg')} style={styles.courseImage}></Image>
                                <Text style={styles.courseText}>{item.courseTitle}</Text>
                            </View>
                        ))}

                    </View>
                </View >

                {/* Participated Courses */}
                < View style={styles.madeCoursesHeader} >
                    <Text style={styles.madeCoursesText}>Participated Courses</Text>
                    <View style={styles.madeCoursesList}>
                        {/* Participated course list */}
                        {participatedCourses.map((item, index) => (
                            <View style={styles.coursesBox}>
                                <Image source={require('../assets/Images/_111434467_gettyimages-1143489763.jpg')} style={styles.courseImage}></Image>
                                <Text style={styles.courseText}>{item.courseTitle}</Text>
                            </View>
                        ))}

                    </View>
                </View >



                {/* Empty Spacer */}
                <Text style={styles.emptySpaces}>Empty</Text>
                <Text style={styles.emptySpaces}>Empty</Text>

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
        paddingLeft: 20
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
    coursesBox: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        alignItems: 'center',
        width: 250,
        height: 150,
    },
    courseImage: {
        width: 225,
        height: 100,
        marginTop: 10,
    },
    courseText: {
        marginTop: 10,

    },

    emptySpaces: {
        opacity: 0,
        fontSize: 30,
    }

});