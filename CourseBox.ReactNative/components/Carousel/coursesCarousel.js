import React, { useState } from "react";
import { View, Dimensions } from "react-native";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import courses from '../../data/courses';
import CourseBox from '../CourseBox/courseBox';
import styles from "./styles";

export default function CoursesCarousel({ courses, navigation, dotesColor }) {
    // Active Slide Index for Pagination.
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <View>
            <Carousel
                layout='default'
                data={courses}
                renderItem={({ item }) => <CourseBox item={item} navigation={navigation} />}
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