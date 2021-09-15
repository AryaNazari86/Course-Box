import React, { useRef, useState } from "react";
import { View, Text, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Chip, TouchableRipple } from 'react-native-paper';
import styles from './styles';

export default function CourseBox({ navigation, item }) {
    // If user likes this course. (Get this from api).
    const [isLiked, setIsLiked] = useState(false);

    const likeAnimation = useRef(null);

    const [likeOpacity, setLikeOpacity] = useState(0.8);

    const playAnimation = () => {
        if (!isLiked) {
            setIsLiked(true);
            setLikeOpacity(1);
            likeAnimation.current.play();
        }
        else {
            setIsLiked(false);
            setLikeOpacity(0.7);
        }
    };

    return (
        <TouchableRipple style={styles.coursesBox} onPress={() => navigation.navigate('CoursePreview', { item })}>
            <View>
                <Image source={item.image} style={styles.courseImage}></Image>
                <View style={styles.courseBoxContent}>
                    <View style={styles.courseLines}>
                        <Text style={styles.courseTitle}>{item.title}</Text>
                        <MaterialCommunityIcons name="account-group" size={18} color="#14213D" style={styles.courseIcons} />
                        <Text style={[{ color: '#14213D' }, styles.courseNumData]}>{item.participants}</Text>
                    </View>
                    <Chip style={styles.courseCategory}>{item.category}</Chip>
                    <View style={styles.courseLines}>
                        <Text style={styles.courseAuthor}>{item.author}</Text>
                        <MaterialCommunityIcons name="star" size={18} color="#fca311" style={styles.courseIcons} />
                        <Text style={[{ color: '#fca311' }, styles.courseNumData]}>{item.likes}</Text>
                    </View>
                </View>
            </View>
        </TouchableRipple>
    )
}