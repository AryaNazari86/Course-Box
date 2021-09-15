import React from 'react';
import { View, FlatList } from 'react-native';
import courses from '../../../data/courses';
import styles from './styles';
import CourseBox from '../../CourseBox/courseBox';

export default function Category({ category, navigation }) {
    return (
        <View style={[{ backgroundColor: category.categoryBgColor }, styles.content]}>
            <FlatList
                data={courses}
                renderItem={({ item }) => (<CourseBox item={item} navigation={navigation} />)} />
        </View>
    );
}