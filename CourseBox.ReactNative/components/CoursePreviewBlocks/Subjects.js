import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Lesson from './Lesson.js';
export default function Subject( {item, navigation} ) {
    return (
    <View style={styles.subject}>
        {/* Subject's title */}
        <View style={styles.subjectTitle}>
            {/* Icon */}
            <MaterialIcons name={item.icon} size={100} color='#3D4751' style={styles.subjectIcon} />
            {/* Text */}
            <Text style={styles.subjectTitleText}>{item.title}</Text>
        </View>
        <View style={styles.subjectQls}>
            {item.content.map(
                (item) => {
                    {/* Each lesson of the subject  */ }
                    return (
                        <Lesson item={item} navigation={navigation}/>
                    )
                }
            )}
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    subject: {
        marginVertical: 15,
        marginHorizontal: 30,
        borderWidth: 3,
        borderRadius: 50,
        borderColor: '#3D4751',
        paddingBottom: 10,
    },
    subjectIcon: {
        alignSelf: 'center',
    },
    subjectTitle: {
        alignSelf: 'center',
        borderColor: '#14213D',
    },
    subjectTitleText: {
        alignSelf: 'center',
        fontSize: 25,
        fontFamily: 'rubik-bold',
        color: '#A8DADC',
        fontFamily: 'comfortaa-bold',
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
        borderColor: '#14213D',
        alignItems: 'center',
    },
    qlTitleText: {
        marginBottom: 10,
        alignSelf: 'center',
        fontFamily: 'comfortaa-bold',
        color: '#A8DADC',
    },
    qlIconIn: {
        padding: 8,
        borderRadius: 33,
        overflow: 'hidden',
    },
    qlIconOut: {
        width: 85,
        borderWidth: 4,
        padding: 5,
        borderRadius: 40,
        borderColor: '#3D4751',
        overflow: 'hidden',
    },
});