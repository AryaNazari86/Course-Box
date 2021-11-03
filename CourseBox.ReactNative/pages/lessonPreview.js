import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../shared/header';
import { FAB } from 'react-native-paper';
import { globalStyles } from '../shared/globalStyle';
import LessonBlock from '../components/LessonBlock';
export default function LessonPreview() {
    const lessonContent = [
        { type: 'title', content: 'header', key: '1' },
        { type: 'text', content: 'This is a test content', key: '2' },
        { type: 'image', content: require('../assets/Icons/user.png'), key: '3' },
        { type: 'text', content: 'test content', key: '4' },
    ]

    return (
        <View style={{ ...globalStyles.appBackground, flex: 1 }}>
            <Header
                title="Lesson"
            />

            {/* mapping between every item in each lesson */}
            {lessonContent.map((item) => (
                <LessonBlock
                    type={item.type}
                    content={item.content}
                />
            ))}

        </View>


    )
}
