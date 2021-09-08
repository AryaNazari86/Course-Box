import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

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
                        <View>
                            <Text>{item.title}</Text>
                            <View>
                                {item.content.map(
                                    (item) => {
                                        return (
                                            <TouchableOpacity>
                                                <Text>{item.title}</Text>
                                            </TouchableOpacity>
                                        )
                                    }
                                )}
                            </View>
                        </View>
                    )
                }
            )}
        </View>
    )
}