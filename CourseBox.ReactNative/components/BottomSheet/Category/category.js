import React from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import CourseBox from '../../courseBox';
import { globalStyles } from "../../../shared/globalStyle";

export default function Category({ category }) {
    // Get courses with that category from API.
    const courses = [
        { title: 'Dribbling', category: 'Sports', author: '@Arya', participants: '100', likes: '99', description: 'something ...', image: require(`../../../assets/Images/messi.jpeg`), key: '1' },
        { title: 'Hacking', category: 'Programming', author: '@Ilia', participants: '10', likes: '10', description: 'something ...', image: require(`../../../assets/Images/hacking_course.jpg`), key: '2' },
        { title: 'Javascript Beginner Course', category: 'Programming', author: '@Ilia', participants: '10', likes: '10', description: 'something ...', image: require(`../../../assets/Images/Javascript_Course.png`), key: '3' },
        { title: 'HTML Beginner Course', category: 'Programming', author: '@Ilia', participants: '10', likes: '10', description: 'something ...', image: require(`../../../assets/Images/HTML_Course.jpeg`), key: '4' },
        { title: 'CSS Beginner Course', category: 'Programming', author: '@Ilia', participants: '10', likes: '10', description: 'something ...', image: require(`../../../assets/Images/CSS_Course.png`), key: '5' },
        { title: 'PyQT5 Course', category: 'Programming', author: '@Arya', participants: '10', likes: '10', description: 'something ...', image: require(`../../../assets/Images/PyQT5_Course.jpeg`), key: '6' },
        { title: 'C# Course', category: 'Programming', author: '@MHK', participants: '10', likes: '10', description: 'something ...', image: require(`../../../assets/Images/c-sharp-course.jpeg`), key: '7' },
        { title: 'Soccer for beginners', category: 'Sports', author: '@Person', participants: '10', likes: '10', description: 'something ...', image: require(`../../../assets/Images/soccer_Course.jpeg`), key: '8' },
    ];

    return (
        <View style={[{ backgroundColor: category.categoryBgColor }, styles.panel]}>
            <View style={styles.panelTop}>
                <MaterialCommunityIcons name={category.categoryIcon} size={28} color={category.categoryIconColor} />
                <Text style={[{ color: category.categoryIconColor }, styles.panelTitle]}>{category.categoryTitle}</Text>
            </View>

            <View style={styles.content}>
                <FlatList
                    data={courses}
                    style={styles.list}
                    renderItem={({ item }) => (<CourseBox item={item} />)} />
            </View>
        </View>
    );
}