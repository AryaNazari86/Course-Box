import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { golbalStyles } from "../shared/globalStyle";

export default function Search() {
    const [courses, setCourses] = useState([
        { title: 'Math', key: '1' },
    ])
    const [searchValue, setSearchValue] = useState(' ');
    return (
        <View>
            <TextInput
                placeholder='Search...'
                onChangeText={(value) => { setSearchValue(value); }}
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
                        <TouchableOpacity>
                            <Text>{item.title}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}