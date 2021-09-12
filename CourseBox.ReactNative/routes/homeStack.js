import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../pages/home';
import CoursePreview from '../pages/coursePreview';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            headerShown: false
        }
    },
    CoursePreview: {
        screen: CoursePreview,
        navigationOptions: {
            headerShown: false
        }
    }
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);