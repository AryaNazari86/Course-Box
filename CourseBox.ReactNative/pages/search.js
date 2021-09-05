import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import { globalStyles } from "../shared/globalStyle";
import { Chip, TextInput } from 'react-native-paper';
import Header from '../shared/header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CourseBox from "../components/courseBox";

export default function Search() {
    const [courses, setCourses] = useState([
        { title: 'Dribbling', category: 'Sports', author: '@Arya', participants: '100', likes: '99', description: 'something ...', image: require(`../assets/Images/_111434467_gettyimages-1143489763.jpg`), key: '1' },
        { title: 'Hacking', category: 'Programming', author: '@Ilia', participants: '10', likes: '10', description: 'something ...', image: require(`../assets/Images/_111434467_gettyimages-1143489763.jpg`), key: '2' },
        { title: 'Hacking', category: 'Programming', author: '@Ilia', participants: '10', likes: '10', description: 'something ...', image: require(`../assets/Images/_111434467_gettyimages-1143489763.jpg`), key: '3' },
        { title: 'Hacking', category: 'Programming', author: '@Ilia', participants: '10', likes: '10', description: 'something ...', image: require(`../assets/Images/_111434467_gettyimages-1143489763.jpg`), key: '4' },
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
    const categorySearch = (item) => {
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
        { name: 'Sports', selected: false, key: '2' },
        { name: 'Programming', selected: false, key: '3' },
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
                                    onPress={() => categorySearch(item)}
                                >
                                    {item.name}
                                </Chip>)
                        })}
                    </ScrollView>

                    <ScrollView>
                        {filterCourses().map((item) => {
                            return (
                                <CourseBox
                                    item={item}
                                />
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