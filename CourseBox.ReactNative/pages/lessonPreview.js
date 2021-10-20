import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../shared/header';
import { FAB } from 'react-native-paper';
import { globalStyles } from '../shared/globalStyle';
import LessonBlock from '../components/LessonBlock';
export default function LessonPreview() {
    const lessonContent = [
        { type: 'title', content: 'header' },
        { type: 'text', content: 'This is a test content' },
        { type: 'image', content: require('../assets/Icons/user.png') },
        { type: 'text', content: 'test content' },
    ]

    return (
        <View style={globalStyles.appBackground}>
            <Header
                title="Lesson"
            />

            {lessonContent.map((item) => (
                <LessonBlock

                    type={item.type}
                    content={item.content}
                />
            ))}

        </View>


    )
}
