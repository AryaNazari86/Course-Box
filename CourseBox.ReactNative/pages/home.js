import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Header from '../shared/header';
import CategoryBox from "../components/Categorybox/categorybox";


export default function Home() {
    // Get Categories From API
    const categories = [
        { categoryId: 1, categoryTitle: 'Maths', categoryIcon: 'math-compass', categoryIconColor: '#323ca8', categoryBgColor: '#9ba4f2' },
        { categoryId: 2, categoryTitle: 'Computer', categoryIcon: 'code-tags', categoryIconColor: '#00a625', categoryBgColor: '#abffbe' },
        { categoryId: 3, categoryTitle: 'Maths', categoryIcon: 'volleyball', categoryIconColor: '#a3003c', categoryBgColor: '#ff87b3' },
        { categoryId: 4, categoryTitle: 'Science', categoryIcon: 'atom-variant', categoryIconColor: '#942700', categoryBgColor: '#ffa787' },
    ];

    return (
        <View>
            {/* Header */}
            <Header title="Home" />
            {/* Categories */}
            <ScrollView 
                horizontal={true}
                style={styles.categoriesContainer}>
                {categories.map(item => (
                    <CategoryBox category={item} />  
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    categoriesContainer: {
        flexDirection: 'row',
    },
});