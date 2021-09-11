import React, { useState, useRef } from "react";
import { ScrollView, StyleSheet, View, TouchableWithoutFeedback, Text } from "react-native";
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import Header from '../shared/header';
import CategoryBox from "../components/Categorybox/categorybox";
import BottomSheetHeader from "../components/BottomSheet/Header/header";
import BottomSheetCategory from "../components/BottomSheet/Category/category";


export default function Home() {
    // Access bottom sheet using sheetRef.current;
    const bottomSheetRef = useRef(null);

    // Some styles for Dark Screen.
    const [darkScreen, setDarkScreen] = useState({ width: 0, height: 0 });

    // Get Categories From API
    const categories = [
        { categoryId: 1, categoryTitle: 'Maths', categoryIcon: 'math-compass', categoryIconColor: '#323ca8', categoryBgColor: '#9ba4f2' },
        { categoryId: 2, categoryTitle: 'Computer', categoryIcon: 'code-tags', categoryIconColor: '#00a625', categoryBgColor: '#abffbe' },
        { categoryId: 3, categoryTitle: 'Sports', categoryIcon: 'volleyball', categoryIconColor: '#a3003c', categoryBgColor: '#ff87b3' },
        { categoryId: 4, categoryTitle: 'Science', categoryIcon: 'atom-variant', categoryIconColor: '#942700', categoryBgColor: '#ffa787' },
    ];

    // Clicked CategoryId will be here.
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    const onCategoryClicked = (category) => {
        setSelectedCategory(category);
        if (bottomSheetRef != null) {
            bottomSheetRef.current.snapTo(1);
            setDarkScreen({ width: '100%', height: '100%' })
        }
    };

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => bottomSheetRef.current.snapTo(0)}>
                <View style={styles.contentContainer}>
                    {/* Header */}
                    <Header title="Home" />
                    {/* Categories */}
                    <ScrollView
                        horizontal={true}
                        style={styles.categoriesContainer}>
                        {categories.map(item => (
                            <CategoryBox category={item} onPress={() => onCategoryClicked(item)} />
                        ))}
                    </ScrollView>
                    {/* When we open category bottom sheet, the screen will become dark. */}
                    <View style={[darkScreen, styles.darkScreen]}></View>
                </View>
            </TouchableWithoutFeedback>
            <BottomSheet
                ref={bottomSheetRef}
                snapPoints={[0, '80%', '40%']}
                renderHeader={() => <BottomSheetHeader category={selectedCategory} />}
                renderContent={() => <BottomSheetCategory category={selectedCategory} />}
                enabledInnerScrolling={true}
                enabledContentGestureInteraction={false}
                onCloseEnd={() => setDarkScreen({ width: 0, height: 0 })}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flexDirection: 'column',
    },
    categoriesContainer: {
        flexDirection: 'row',
    },
    darkScreen: {
        position: 'absolute',
        backgroundColor: '#000',
        opacity: 0.4,
    }
});