import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../shared/header';

export default function CoursePreview(props) {
    const course = props.navigation.state.params.item;
    return (
        <View style={{ backgroundColor: '#fca311', flex: 1 }}>
            <Header title={course.title} backButton={true} backAction={() => props.navigation.goBack()} fontFamily="rubik-regular" height={60} />
            <ScrollView >
                {course.content.map(
                    (item) => {
                        return (
                            <View style={styles.subject}>
                                {/* Subject's title */}
                                <View style={{ ...styles.subjectTitle, borderColor: course.color }}>
                                    {/* Icon */}
                                    <MaterialIcons name={item.icon} size={100} color={course.color} style={styles.subjectIcon} />
                                    {/* Text */}
                                    <ImageBackground source={require('../assets/Images/title.png')} resizeMode='cover' style={{ justifyContent: 'center', height: 100, width: 200 }}>
                                        <Text style={{ ...styles.subjectTitleText, color: course.color }}>{item.title}</Text>
                                    </ImageBackground>
                                </View>
                                {/* Lessons of the subject  */}
                                <View style={styles.subjectQls}>
                                    {item.content.map(
                                        (item) => {
                                            {/* Each lesson of the subject  */ }
                                            return (
                                                <TouchableOpacity style={{ ...styles.ql, borderColor: course.color }}>
                                                    {/* lesson's icon */}
                                                    <MaterialIcons name={item.icon} size={50} color={course.color} style={{ ...styles.qlIcon, borderColor: course.color }} />
                                                    {/* lesson's title */}
                                                    <View>

                                                        <Text style={{ ...styles.qlTitleText, color: course.color }}>{item.title}</Text>

                                                    </View>
                                                </TouchableOpacity>
                                            )
                                        }
                                    )}
                                </View>

                            </View >
                        )
                    }

                )}
            </ScrollView >
        </View >
    )
}

const styles = StyleSheet.create({
    subject: {
        marginVertical: 15,
        marginHorizontal: 30,
    },
    subjectIcon: {
        alignSelf: 'center',
    },
    subjectTitle: {
        alignSelf: 'center',
    },
    subjectTitleText: {
        alignSelf: 'center',
        fontSize: 25,
        fontFamily: 'rubik-bold',
    },
    subjectQls: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    ql: {
        marginHorizontal: 5,
        marginTop: 10,
        height: 100,
        width: 100,
    },
    qlTitleText: {
        marginBottom: 10,
        alignSelf: 'center',
        top: 20,
        fontFamily: 'rubik-bold',
    },
    qlIcon: {
        padding: 10,
        borderWidth: 5,
        borderRadius: 40,
        alignSelf: 'center',
    }
})