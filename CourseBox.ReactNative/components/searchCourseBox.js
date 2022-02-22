import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList, Image } from 'react-native';
import { theme } from '../Themes/theme';
export default function SearchCourseBox({ navigation, item }) {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.image}>

            </View>
            <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.cont}><Text style={styles.category}>{item.category}</Text></View>
                    <View style={styles.cont}><Text style={styles.likes}>{item.likes} Likes</Text></View>
                    <View style={styles.cont}><Text style={styles.author}> Created By {item.author}</Text></View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 1,
        borderTopColor: theme.color3,
        borderBottomWidth: 1,
        borderBottomColor: theme.color3,
        marginBottom: 20,
        alignSelf: 'stretch',
        flexDirection: 'column',
        height: 100
    },
    title: {
        fontSize: 20,
        color: theme.color3,
    },
    image: {
        width: '20%',
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
    }

});