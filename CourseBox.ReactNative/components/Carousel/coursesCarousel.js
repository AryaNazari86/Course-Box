import React, { useState } from "react";
import { View, Dimensions } from "react-native";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CourseBox from '../courseBox';
import styles from "./styles";

export default function CoursesCarousel({ courses, navigation, dotesColor }) {
    // Active Slide Index for Pagination.
    const [activeSlide, setActiveSlide] = useState(0);

    // When user cliked on a course
    const pressHandler = (page, data) => {
        navigation.push(page, data);
    };

    return (
        <View>
            <Carousel
                layout='default'
                data={courses}
                renderItem={({ item }) => <CourseBox item={item} pressHandler={pressHandler} />}
                onSnapToItem={(index) => setActiveSlide(index)}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={250}
            />
            <Pagination
                dotsLength={courses.length}
                activeDotIndex={activeSlide}
                dotStyle={[{ backgroundColor: dotesColor }, styles.dotStyle]}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />

        </View>
    );
}