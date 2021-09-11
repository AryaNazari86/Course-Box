import React, { useRef } from "react";
import Carousel from 'react-native-snap-carousel';
import CourseBox from '../../courseBox';
import styles from "./styles";

export default function SimpleCarousel({ courses }) {
    const _carousel = useRef(null);

    return (
        <Carousel
            ref={_carousel}
            data={courses}
            renderItem={({ item }) => <CourseBox item={item} />}
            sliderWidth={300}
            itemWidth={250}
        />
    );
}