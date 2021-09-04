import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from "../shared/globalStyle";
import { Chip, TextInput } from 'react-native-paper';
import Header from '../shared/header';

export default function Search() {
    const [courses, setCourses] = useState([
        { title: 'Minus', category: 'Math', author: 'Arya', views: '1', likes: '1', description: 'something ...', key: '1' },
        { title: 'Minus', category: 'Physics', author: 'Arya', views: '1', likes: '1', description: 'something ...', key: '2' }
    ])
    const [searchValue, setSearchValue] = useState(' ');
    const [category, setCategory] = useState([
        { name: 'All', selected: true, key: '1' },
        { name: 'Physics', selected: false, key: '2' },
        { name: 'Math', selected: false, key: '3' },
    ]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    return (
        <View>
            <Header title='Search' />
            <View style={styles.container}>

                <TextInput
                    mode='outlined'
                    label='Search...'
                    onChangeText={(value) => { setSearchValue(value); }}
                    style={globalStyles.input}
                />
                <View>
                    <FlatList
                        data={category}
                        renderItem={({ item }) => {
                            return (
                                <Chip
                                    mode='flat'
                                    style={styles.chip}
                                    selected={item.selected}
                                    onPress={() => {
                                        if (item.selected == false) {
                                            var newSelectedArray = [];
                                            for (var i = 0; i < category.length; i++) {
                                                if (i + 1 == item.key) {
                                                    newSelectedArray.push(
                                                        { name: item.name, selected: true, key: item.key }
                                                    )
                                                    setSelectedCategory(item.name);
                                                }
                                                else {
                                                    if (category[i].selected == true) {
                                                        newSelectedArray.push(
                                                            { name: category[i].name, selected: false, key: category[i].key }
                                                        )
                                                    }
                                                    else {
                                                        newSelectedArray.push(category[i]);
                                                    }
                                                }
                                            }
                                            setCategory(newSelectedArray);
                                        }
                                        else {
                                            var newSelectedArray = [];
                                            for (var i = 0; i < category.length; i++) {
                                                if (i + 1 == item.key) {
                                                    newSelectedArray.push(
                                                        { name: item.name, selected: false, key: item.key }
                                                    )

                                                }
                                                else if (i == 0) {
                                                    newSelectedArray.push(
                                                        { name: 'All', selected: true, key: '1' }
                                                    )
                                                    setSelectedCategory('All');
                                                }
                                                else {
                                                    newSelectedArray.push(category[i]);
                                                }
                                            }
                                            setCategory(newSelectedArray);
                                        }
                                    }}
                                >
                                    {item.name}
                                </Chip>
                            )
                        }}
                    />
                </View>
                <FlatList
                    data={(courses.filter((item) => {
                        for (var i = 0; i <= (item.title.length - searchValue.length); i++) {
                            if (item.title.slice(i, i + searchValue.length) == searchValue) {
                                return (true);
                            }
                        }
                    })).filter((item) => {

                        if (item.category == selectedCategory || 'All' == selectedCategory) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    })}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={globalStyles.courses}>
                                <Text>{item.title}</Text>
                                <Text>{item.category}</Text>
                                <Text>{item.author}</Text>
                                <Text>{item.views}</Text>
                                <Text>{item.likes}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View >
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#E5E5E5',
    },
    chip: {
        flexDirection: 'row',
    },
})