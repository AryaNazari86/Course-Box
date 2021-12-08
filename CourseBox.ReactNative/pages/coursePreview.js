import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../shared/header';
import { FAB } from 'react-native-paper';
import Subject from '../components/CoursePreviewBlocks/Subjects.js';
import {theme} from '../Themes/theme';

export default function CoursePreview(props) {
    const course = props.route.params.datas[0];
    const [content, setContent] = useState(course.content);
    const navigation = props.route.params.datas[1];
    return (
        <View style={{ backgroundColor: theme.color1, flex: 1 }}>
            <Header
                title={course.title}
                backButton={true}
                backAction={() => props.navigation.goBack()}
                height={60}
                buttons={[
                    {
                        icon: "plus",
                        onPress: () => {
                            setContent([...content, { title: "New Subject", icon: "book", content: [] }]);
                            course.content = content;
                        }
                    }
                ]} />
            <ScrollView >
                {content.map(
                    (item, index) => {
                        return (
                            <Subject item={item} navigation={navigation} key={index} />
                        )
                    }

                )}
                <Text style={{ alignSelf: 'center', color: theme.color3, fontFamily: 'comfortaa-light' }}>Created by {course.author}</Text>
            </ScrollView >

            <FAB
                color={theme.color3}
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
        borderWidth: 3,
        borderRadius: 50,
        borderColor: theme.color2,
        paddingBottom: 10,
    },
    subjectIcon: {
        alignSelf: 'center',
    },
    subjectTitle: {
        alignSelf: 'center',
        borderColor: theme.color2,
    },
    subjectTitleText: {
        alignSelf: 'center',
        fontSize: 25,
        fontFamily: 'rubik-bold',
        color: theme.color3,
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
        borderColor: theme.color3,
        alignItems: 'center',
    },
    qlTitleText: {
        marginBottom: 10,
        alignSelf: 'center',
        fontFamily: 'comfortaa-bold',
        color: theme.color3,
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
        borderColor: theme.color2,
        overflow: 'hidden',
    },
    infoButton: {
        left: 300,
        bottom: 10,
        width: 70,
        height: 70,
        borderRadius: 100,
        backgroundColor: theme.color2,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    }
})