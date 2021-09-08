import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CoursePreview() {
    var course = {
        title: 'Dribbling',
        category: 'Sports',
        author: '@Arya',
        participants: '100',
        likes: '99',
        description: 'something ...',
        image: require(`../assets/Images/messi.jpeg`),
        content: [
            {
                title: 'Low Dribble', content: [
                    { title: 'how to' },
                    { title: 'some examples' }
                ]
            },
            {
                title: 'Speed Dribble', content: [
                    { title: 'how to' },
                    { title: 'some examples' }
                ]
            },
            {
                title: 'Change-of-pace Dribble', content: [
                    { title: 'how to' },
                    { title: 'some examples' }
                ]
            },
        ],
        key: '1'
    };
    return (
        <View>
            {course.content.map(
                (item) => {
                    return (
                        <View style={styles.subject}>
                            {/* Subject's title */}
                            <View style={styles.subjectTitle}>
                                <Text style={styles.subjectTitleText}>{item.title}</Text>
                            </View>
                            {/* Lessons of the subject  */}
                            <View style={styles.subjectLessons}>
                                {item.content.map(
                                    (item) => {
                                        {/* Each lesson of the subject  */ }
                                        return (
                                            <TouchableOpacity>
                                                {/* lesson's title */}
                                                <Text>{item.title}</Text>
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

    },
    subjectTitle: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: 'red',
        borderBottomColor: 'red',
    },
    subjectTitleText: {
        alignSelf: 'center',
    },
    subjectLessons: {
        flexDirection: 'row',
    }
})