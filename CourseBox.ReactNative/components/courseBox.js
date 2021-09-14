import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, Image, Pressable } from 'react-native';
import { globalStyles } from "../shared/globalStyle";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Chip } from 'react-native-paper';
import LottieView from 'lottie-react-native';

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
        <TouchableOpacity style={globalStyles.coursesBox} onPress={() => navigation.navigate('CoursePreview', { item })}>
            <Image source={item.image} style={globalStyles.courseImage}></Image>
            <View style={globalStyles.courseLines}>
                <Text style={globalStyles.courseTitle}>{item.title}</Text>
                <MaterialCommunityIcons name="account-group" size={16} color="#14213D" style={globalStyles.courseIcons} />
                <Text style={globalStyles.courseNumData}>{item.participants}</Text>
            </View>
            <Chip style={globalStyles.courseCategory}>{item.category}</Chip>
            <View style={globalStyles.courseLines}>
                <Text style={globalStyles.courseAuthor}>{item.author}</Text>
                <Pressable
                    onPress={() => playAnimation()}
                    style={globalStyles.courseLikeButton}>
                    <LottieView
                        ref={likeAnimation}
                        style={[{ opacity: likeOpacity }, globalStyles.courseLikeAnimation]}
                        loop={false}
                        source={require('../assets/Animations/like.json')}
                    />
                </Pressable>
                <Text style={globalStyles.courseNumData}>{item.likes}</Text>
            </View>

        </TouchableOpacity>
    )
}