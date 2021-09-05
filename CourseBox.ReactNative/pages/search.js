import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, FlatList, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import { globalStyles } from "../shared/globalStyle";
import { Chip, TextInput } from 'react-native-paper';
import Header from '../shared/header';

export default function Search() {
    const [courses, setCourses] = useState([
        { title: 'Cheating', category: 'Math', author: 'Arya', participants: '100', likes: '1', description: 'something ...', image: require(`../assets/Images/_111434467_gettyimages-1143489763.jpg`), key: '1' },
        { title: 'Hacking', category: 'Physics', author: 'Ilia', participants: '10', likes: '1', description: 'something ...', image: require(`../assets/Images/_111434467_gettyimages-1143489763.jpg`), key: '2' },
    ])
    const [coursesToSearch, setCoursesToSearch] = useState(courses);
    const filterCourses = () => {
        return (courses.filter((item) => {
            for (var i = 0; i <= (item.title.length - searchValue.length); i++) {
                if (item.title.slice(i, i + searchValue.length).toLowerCase == searchValue.toLowerCase) {
                    return (true);
                }
            }
        }).filter((item) => {

            if (item.category == selectedCategory || 'All' == selectedCategory) {
                return true;
            }
            else {
                return false;
            }
        }))
    }
    const categorySearch = () => {
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
    }

    const [searchValue, setSearchValue] = useState('');
    const [category, setCategory] = useState([
        { name: 'All', selected: true, key: '1' },
        { name: 'Physics', selected: false, key: '2' },
        { name: 'Math', selected: false, key: '3' },

    ]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
        >
            <View>
                <Header title='Search' />
                <View style={styles.container}>

                    <TextInput
                        mode='outlined'
                        label='Search'
                        onChangeText={(value) => { setSearchValue(value); }}
                        style={globalStyles.input}
                        left={<TextInput.Icon name="magnify" style={styles.searchIcon} />}
                        theme={{
                            colors: {
                                primary: '#14213D'
                            }
                        }}
                    />
                    <ScrollView horizontal={true} >
                        {category.map((item) => {
                            return (
                                <Chip
                                    mode='flat'
                                    style={styles.chip}
                                    selected={item.selected}
                                    onPress={categorySearch}
                                >
                                    {item.name}
                                </Chip>)
                        })}
                    </ScrollView>

                    <ScrollView>
                        {filterCourses().map((item) => {
                            return (
                                <TouchableOpacity style={globalStyles.courses}>
                                    <Text>{item.title}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>
                </View >
            </View>
        </TouchableWithoutFeedback >

    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    chip: {
        justifyContent: 'center',
        flexDirection: 'row',
        height: 36,
        marginHorizontal: 2,
    },
    searchIcon: {
        paddingTop: 9.5,
    },
})