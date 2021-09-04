import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from "../shared/globalStyle";

export default function Search() {
    const [courses, setCourses] = useState([
        { title: 'Minus', category: 'Math', author: 'Arya', views: '1', likes: '1', description: 'something ...', key: '1' },
        { title: 'Minus', category: 'Math', author: 'Arya', views: '1', likes: '1', description: 'something ...', key: '2' }
    ])
    const [searchValue, setSearchValue] = useState(' ');
    const [categorySearchValue, setCategorySearchValue] = useState({
        Math: true
    });
    const [visible, setVisible] = useState(false)
    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Search...'
                onChangeText={(value) => { setSearchValue(value); }}
                style={globalStyles.input}
            />
            <FlatList
                data={courses.filter((item) => {
                    for (var i = 0; i <= (item.title.length - searchValue.length); i++) {
                        if (item.title.slice(i, i + searchValue.length) == searchValue) {
                            return (true);
                        }
                    }
                })}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={golbalStyles.courses}>
                            <Text>{item.title}</Text>
                            <Text>{item.category}</Text>
                            <Text>{item.author}</Text>
                            <Text>{item.views}</Text>
                            <Text>{item.likes}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#E5E5E5',
    }
})