import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { golbalStyles } from "../shared/globalStyle";

export default function Search() {
    const [courses, setCourses] = useState([
        { title: 'Math' },
    ])
    const [searchValue, setSearchValue] = useState('');
    return (
        <View>
            <TextInput
                placeholder='Search...'
                onChangeText={(value) => { setSearchValue(value); }}
            />
            <FlatList
                data={courses}
                renderItem={({ item }) => (
                    TouchableOpacity
                )}
            />
        </View>
    )
}