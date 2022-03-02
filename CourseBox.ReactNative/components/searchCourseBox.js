import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList, Image } from 'react-native';
import { theme } from '../Themes/theme';
import { API_ADDRESS } from '../Services/userService';
import CategoryIcon from './CourseBox/courseBoxIcon';
export default function SearchCourseBox({ navigation, item }) {
    return (
        <TouchableOpacity style={styles.container} onPress={() => {
            navigation.navigate("CoursePreview", { datas: [item, navigation] })
            participate(item.id)
        }
        }>
            <CategoryIcon style={styles.image} source={'https://' + API_ADDRESS + '/static/' + item.image}></CategoryIcon>
            <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.cont}><Text style={styles.category}>{item.category_id}</Text></View>
                    <View style={styles.cont}><Text style={styles.likes}>{item.likes} Likes</Text></View>
                    <View style={styles.cont}><Text style={styles.author}>{item.author_id}</Text></View>
                </View>
            </View>
        </TouchableOpacity >
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        alignSelf: 'stretch',
        flexDirection: 'row',
        height: 100
    },
    title: {
        fontSize: 20,
        color: theme.color3,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginHorizontal: 7
    },
    category: {
        fontSize: 15,
        color: theme.color2,
    },
    description: {
        fontSize: 15,
        fontStyle: 'italic',
        color: theme.color3,
    },
    cont: {
        borderRadius: 5,
        padding: 5,
        backgroundColor: theme.color3,
        marginHorizontal: 4,
        marginVertical: 5
    }

});