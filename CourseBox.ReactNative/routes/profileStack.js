import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Profile from '../pages/profile';
import CoursePreview from '../pages/coursePreview';

const screens = {
    Profile: {
        screen: Profile,
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
const ProfileStack = createStackNavigator(screens);

export default createAppContainer(ProfileStack);