import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../shared/header';

export default function CoursePreview(props) {
    const course = props.navigation.state.params.item;
    return (
        <View>
            <Header title={course.title} backButton={true} backAction={() => navigation.goBack()} />
            {course.content.map(
                (item) => {
                    return (
                        <View style={styles.subject}>
                            {/* Subject's title */}
                            <View style={{ ...styles.subjectTitle, borderColor: item.color }}>
                                <Text style={{ ...styles.subjectTitleText, color: item.color }}>{item.title}</Text>
                            </View>
                            {/* Lessons of the subject  */}
                            <View style={styles.subjectLessons}>
                                {item.content.map(
                                    (item) => {
                                        {/* Each lesson of the subject  */ }
                                        return (
                                            <TouchableOpacity style={{ ...styles.lesson, borderColor: item.color }}>
                                                {/* lesson's icon */}
                                                <MaterialIcons name="class" size={50} color={item.color} style={styles.lessonIcon} />
                                                {/* lesson's title */}
                                                <Text style={{ ...styles.lessonTitleText, color: item.color }}>{item.title}</Text>
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
    lesson: {
        borderWidth: 1,
        marginHorizontal: 5,
        marginTop: 10,
        borderRadius: 20,
        height: 100,
        width: 100,
    },
    lessonTitleText: {
        marginBottom: 10,
        alignSelf: 'center',
        top: 20,
    },
    lessonIcon: {
        alignSelf: 'center',
    }
})