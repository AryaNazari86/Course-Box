import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Search from '../pages/search';
import CoursePreview from '../pages/coursePreview';

const screens = {
    Search: {
        screen: Search,
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