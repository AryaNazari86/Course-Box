import React, { useRef } from "react";
import { Dimensions } from "react-native";
import Carousel from 'react-native-snap-carousel';
import CourseBox from '../../courseBox';
import styles from "./styles";

export default function SimpleCarousel({ courses, navigation }) {
    const _carousel = useRef(null);
    // When user cliked on a course
    const pressHandler = (page, data) => {
        navigation.push(page, data);
    };
    return (
        <Carousel
            ref={_carousel}
            data={courses}
            renderItem={({ item }) => <CourseBox item={item} pressHandler={pressHandler} />}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={250}
        />
    );
}