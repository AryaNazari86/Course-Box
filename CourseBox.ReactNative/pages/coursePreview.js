import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../shared/header';
import { FAB } from 'react-native-paper';

export default function CoursePreview(props) {
    const course = props.route.params.item;
    return (
        <View style={{ backgroundColor: '#fca311', flex: 1 }}>
            <Header title={course.title} backButton={true} backAction={() => props.navigation.goBack()}  height={60} />
            <ScrollView >
                {course.content.map(
                    (item) => {
                        return (
                            <View style={styles.subject}>
                                {/* Subject's title */}
                                <View style={styles.subjectTitle}>
                                    {/* Icon */}
                                    <MaterialIcons name={item.icon} size={100} color='#14213D' style={styles.subjectIcon} />
                                    {/* Text */}
                                    <ImageBackground source={require('../assets/Images/title.png')} resizeMode='cover' style={{ justifyContent: 'center', height: 100, width: 200 }}>
                                        <Text style={styles.subjectTitleText}>{item.title}</Text>
                                    </ImageBackground>
                                </View>
                                {/* Lessons of the subject  */}
                                <View style={styles.subjectQls}>
                                    {item.content.map(
                                        (item) => {
                                            {/* Each lesson of the subject  */ }
                                            return (
                                                <TouchableOpacity style={styles.ql}>
                                                    {/* lesson's icon */}
                                                    <View style={styles.qlIconOut}>
                                                        <MaterialIcons name={item.icon} size={50} color='#14213D' style={{ ...styles.qlIconIn, backgroundColor: item.color }} />
                                                    </View>
                                                    {/* lesson's title */}
                                                    <Text style={styles.qlTitleText}>{item.title}</Text>
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
            <FAB
                color='#fca311'
                icon='information'
                style={styles.infoButton}
            />
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
        borderColor: '#14213D',
    },
    subjectTitleText: {
        alignSelf: 'center',
        fontSize: 25,
        fontFamily: 'rubik-bold',
        color: '#14213D',
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
    },
    qlTitleText: {
        marginBottom: 10,
        alignSelf: 'center',
        top: 20,
        fontFamily: 'rubik-bold',
        color: '#14213D',
    },
    qlIconIn: {
        padding: 8,
        borderRadius: 33,
        alignSelf: 'center',
        overflow: 'hidden',
    },
    qlIconOut: {
        width: 85,
        borderWidth: 4,
        padding: 5,
        borderRadius: 40,
        borderColor: '#14213D',
        overflow: 'hidden',
    },
    infoButton: {
        left: 300,
        bottom: 10,
        width: 70,
        height: 70,
        borderRadius: 100,
        backgroundColor: '#14213D',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    }
})