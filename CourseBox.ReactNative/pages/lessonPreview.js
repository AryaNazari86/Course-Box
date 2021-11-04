import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList, Image, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../shared/header';
import { FAB } from 'react-native-paper';
import { globalStyles } from '../shared/globalStyle';
import LessonBlock from '../components/LessonBlock';
import { Video } from 'expo-av';
export default function LessonPreview() {
    const lessonContent = [
        { type: 'title', content: 'header', key: '1' },
        { type: 'text', content: 'This is a test content', key: '2' },
        { type: 'image', content: require('../assets/Icons/user.png'), key: '3' },
        { type: 'text', content: 'test content', key: '4' },
        { type: 'video', content: require('../assets/Videos/ex.mp4'), key: '5' },
        { type: 'code', content: ['print()'] }
    ]
    const video = React.useRef(null);



    return (
        <View style={{ ...globalStyles.appBackground, flex: 1 }}>
            <Header
                title="Lesson"
            />
            <ScrollView>
                {/* mapping between every item in each lesson */}
                {lessonContent.map((item) => {
                    return (
                        <LessonBlock
                            type={item.type}
                            content={item.content}
                            key={item.key}
                        />
                    )
                })}
            </ScrollView>

        </View>


    )
}
