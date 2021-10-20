import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../shared/header';
import { FAB } from 'react-native-paper';
import { globalStyles } from '../shared/globalStyle';
import { user } from '../assets/Icons/user.png'
export default function LessonBlock({ type, content }) {


    if (type == 'text') {
        return (
            <Text style={styles.text}>{content}</Text>
        )
    }
    if (type == 'image') {
        console.log(typeof content)
        return (
            <Image
                style={styles.image}
                source={content}
            />
        )
    }
    if (type == 'title') {
        return (
            <View style={styles.titleContainer} >
                <Text style={styles.title}>{content}</Text>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    title: {
        color: '#A8DADC',
        fontFamily: 'comfortaa-bold',
        fontSize: 30,
        marginTop: 15,
        marginHorizontal: 15,
    },
    titleContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#3D4751',
        marginHorizontal: 15,
    },
    image: {
        width: '100%',
    },
    text: {
        color: '#A8DADC',
        fontSize: 16,
        fontFamily: 'comfortaa-light',
        marginHorizontal: 15,
        marginTop: 5,
    }
})