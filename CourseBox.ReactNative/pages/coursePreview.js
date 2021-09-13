import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../shared/header';

export default function CoursePreview(props) {
    const course = props.navigation.state.params.item;
    return (
        <View>
            <Header title={course.title} backButton={true} backAction={() => props.navigation.goBack()} fontFamily="rubik-regular" height={60} />
            {course.content.map(
                (item) => {
                    return (
                        <View style={styles.subject}>
                            {/* Subject's title */}
                            <View style={{ ...styles.subjectTitle, borderColor: course.color }}>
                                {/* Icon */}
                                <MaterialIcons name={item.icon} />
                                {/* Text */}
                                <Text style={{ ...styles.subjectTitleText, color: course.color }}>{item.title}</Text>
                            </View>
                            {/* Lessons of the subject  */}
                            <View style={styles.subjectLessons}>
                                {item.content.map(
                                    (item) => {
                                        {/* Each lesson of the subject  */ }
                                        return (
                                            <TouchableOpacity style={{ ...styles.lesson, borderColor: course.color }}>
                                                {/* lesson's icon */}
                                                <MaterialIcons name={item.icon} size={50} color={course.color} style={styles.lessonIcon} />
                                                {/* lesson's title */}
                                                <Text style={{ ...styles.lessonTitleText, color: course.color }}>{item.title}</Text>
                                            </TouchableOpacity>
                                        )
                                    }
                                )}
                            </View>
                        </View >
                    )
                }
            )}
        </View >
    )
}

const styles = StyleSheet.create({
    subject: {
        marginVertical: 15,
        marginHorizontal: 30,
    },
    subjectTitle: {
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 20,

    },
    subjectTitleText: {
        alignSelf: 'center',
        fontSize: 25,
    },
    subjectLessons: {
        flexDirection: 'row',
    },
    ql: {
        borderWidth: 1,
        marginHorizontal: 5,
        marginTop: 10,
        borderRadius: 20,
        height: 100,
        width: 100,
    },
    qlTitleText: {
        marginBottom: 10,
        alignSelf: 'center',
        top: 20,
    },
    qlIcon: {
        alignSelf: 'center',
    }
})