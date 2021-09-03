import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { golbalStyles } from "../shared/globalStyle";

export default function Search() {
    const [courses, setCourses] = useState([
        { title: 'Math', key: '1' },
    ])
    const [searchValue, setSearchValue] = useState('');
    return (
        <View>
            <TextInput
                placeholder='Search...'
                onChangeText={(value) => { setSearchValue(value); }}
            />
            <FlatList
                data={courses.filter((item) => searchValue == item.title)}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <Text>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}