import { View, Text } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

export default function LessonCarousel(props) {
    const lesson = props.route.params.item;
    return (
        <View>
            <Carousel
                layout="default"
                data={lesson}
                renderItem={({ item }) => (
                    <View>
                        <Text>{{ item.title }}</Text>
                        <Text>{{ item.content }}</Text>
                    </View>

                )}
                onSnapToItem={(index) => setActiveSlide(index)}
                sliderWidth={Dimensions.get("window").width}
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
    )
}