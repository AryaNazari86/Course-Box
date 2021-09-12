import React, { useState, useRef } from "react";
import { StyleSheet, View, TouchableWithoutFeedback, FlatList } from "react-native";

// Header Imports
import Header from '../shared/header';

// Category Box Imports
import CategoryBox from "../components/Categorybox/categorybox";

// Bottom Sheet Imports
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import BottomSheetHeader from "../components/BottomSheet/Header/header";
import BottomSheetCategory from "../components/BottomSheet/Category/category";

// Carousel Imports
import SimpleCarousel from '../components/Carousel/SimpleCarousel/simple';

export default function Home({ navigation }) {
    

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


    // Get Latest Courses From API
    const latestCourses = [
        { title: 'Dribbling', category: 'Sports', author: '@Arya', participants: '100', likes: '99', description: 'something ...', image: require(`../assets/Images/messi.jpeg`), key: '1' },
        { title: 'Hacking', category: 'Programming', author: '@Ilia', participants: '10', likes: '10', description: 'something ...', image: require(`../assets/Images/hacking_course.jpg`), key: '2' },
        { title: 'Javascript Beginner Course', category: 'Programming', author: '@Ilia', participants: '10', likes: '10', description: 'something ...', image: require(`../assets/Images/Javascript_Course.png`), key: '3' },
        { title: 'HTML Beginner Course', category: 'Programming', author: '@Ilia', participants: '10', likes: '10', description: 'something ...', image: require(`../assets/Images/HTML_Course.jpeg`), key: '4' },
        { title: 'CSS Beginner Course', category: 'Programming', author: '@Ilia', participants: '10', likes: '10', description: 'something ...', image: require(`../assets/Images/CSS_Course.png`), key: '5' },
        { title: 'PyQT5 Course', category: 'Programming', author: '@Arya', participants: '10', likes: '10', description: 'something ...', image: require(`../assets/Images/PyQT5_Course.jpeg`), key: '6' },
        { title: 'C# Course', category: 'Programming', author: '@MHK', participants: '10', likes: '10', description: 'something ...', image: require(`../assets/Images/c-sharp-course.jpeg`), key: '7' },
        { title: 'Soccer for beginners', category: 'Sports', author: '@Person', participants: '10', likes: '10', description: 'something ...', image: require(`../assets/Images/soccer_Course.jpeg`), key: '8' },
    ];

    // When user click on a category.
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
                    <FlatList
                        style={styles.categoriesContainer}
                        horizontal={true}
                        data={categories}
                        keyExtractor={(item) => item.categoryId.toString()}
                        renderItem={({ item }) =>
                            (<CategoryBox category={item} onPress={() => onCategoryClicked(item)} />)}
                    />
                    
                    {/* A carousel for showing the latest courses. */}
                    <SimpleCarousel courses={latestCourses} navigation={navigation} />

                    {/* When we open category bottom sheet, the screen will become dark. */}
                    <View style={[darkScreen, styles.darkScreen]}></View>

                </View>
            </TouchableWithoutFeedback>

            <BottomSheet
                ref={bottomSheetRef}
                snapPoints={[0, '80%', '40%']}
                renderHeader={() => <BottomSheetHeader category={selectedCategory} />}
                renderContent={() => <BottomSheetCategory category={selectedCategory} navigation={navigation} />}
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