import React, { useState, useRef } from "react";
import { StyleSheet, View, TouchableWithoutFeedback, FlatList, ScrollView, Text } from "react-native";

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
import CoursesCarousel from '../components/Carousel/coursesCarousel';

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

    // Get Popular Courses From API
    const popularCourses = [
        { title: 'HTML Beginner Course', category: 'Programming', author: '@Ilia', participants: '10', likes: '10', description: 'something ...', image: require(`../assets/Images/HTML_Course.jpeg`), key: '4' },
        { title: 'CSS Beginner Course', category: 'Programming', author: '@Ilia', participants: '10', likes: '10', description: 'something ...', image: require(`../assets/Images/CSS_Course.png`), key: '5' },
        { title: 'PyQT5 Course', category: 'Programming', author: '@Arya', participants: '10', likes: '10', description: 'something ...', image: require(`../assets/Images/PyQT5_Course.jpeg`), key: '6' },
        { title: 'C# Course', category: 'Programming', author: '@MHK', participants: '10', likes: '10', description: 'something ...', image: require(`../assets/Images/c-sharp-course.jpeg`), key: '7' },
        { title: 'Soccer for beginners', category: 'Sports', author: '@Person', participants: '10', likes: '10', description: 'something ...', image: require(`../assets/Images/soccer_Course.jpeg`), key: '8' },
        { title: 'Dribbling', category: 'Sports', author: '@Arya', participants: '100', likes: '99', description: 'something ...', image: require(`../assets/Images/messi.jpeg`), key: '1' },
        { title: 'Hacking', category: 'Programming', author: '@Ilia', participants: '10', likes: '10', description: 'something ...', image: require(`../assets/Images/hacking_course.jpg`), key: '2' },
        { title: 'Javascript Beginner Course', category: 'Programming', author: '@Ilia', participants: '10', likes: '10', description: 'something ...', image: require(`../assets/Images/Javascript_Course.png`), key: '3' },
    ];

    // When user click on a category.
    const onCategoryClicked = (category) => {
        setSelectedCategory(category);
        if (bottomSheetRef != null) {
            bottomSheetRef.current.snapTo(1);
            setDarkScreen({ width: '100%', height: '100%' })
        }
    };

    const closeBottomSheet = () => {
        bottomSheetRef.current.snapTo(0);
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <Header title="Home" backgroundColor="#fff" fontFamily="rubik-regular" height={60} />

            {/* Content */}
            <ScrollView
                style={styles.contentContainer}
                showsVerticalScrollIndicator={false}>

                <View style={styles.bgBlue}>

                    {/* Categories */}
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        style={styles.categoriesContainer}
                        horizontal={true}
                        data={categories}
                        keyExtractor={(item) => item.categoryId.toString()}
                        renderItem={({ item }) =>
                            (<CategoryBox category={item} onPress={() => onCategoryClicked(item)} />)}
                    />

                    <View style={styles.latestCoursesContainer}>

                        <Text style={styles.latestCoursesTitle}>Latest Courses</Text>

                        {/* A carousel for showing the latest courses. */}
                        <CoursesCarousel courses={latestCourses} navigation={navigation} dotesColor='#fca311' />

                    </View>

                    <View style={styles.popularCoursesContainer}>

                        <Text style={styles.popularCoursesTitle}>Popular Courses</Text>

                        {/* A carousel for showing the popular courses. */}
                        <CoursesCarousel courses={popularCourses} navigation={navigation} dotesColor='#14213D' />

                    </View>

                </View>

            </ScrollView>

            {/* When we open category bottom sheet, the screen will become dark. */}
            <TouchableWithoutFeedback onPress={() => closeBottomSheet()}>
                <View style={[darkScreen, styles.darkScreen]}></View>
            </TouchableWithoutFeedback>

            {/* Bottom Sheet for categories */}
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
    bgBlue: {
        backgroundColor: '#14213D',
    },
    categoriesContainer: {
        flexDirection: 'row',
    },
    latestCoursesTitle: {
        fontFamily: 'rubik-regular',
        fontSize: 24,
        textAlign: 'center',
        color: '#FFF',
        paddingBottom: 10,
    },
    latestCoursesContainer: {
        paddingTop: 20,
    },
    popularCoursesTitle: {
        fontFamily: 'rubik-regular',
        fontSize: 24,
        textAlign: 'center',
        color: '#14213D',
        paddingBottom: 10,
    },
    popularCoursesContainer: {
        backgroundColor: '#E5E5E5',
        paddingTop: 20,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    darkScreen: {
        position: 'absolute',
        top: 0,
        backgroundColor: '#000',
        opacity: 0.4,
    }
});