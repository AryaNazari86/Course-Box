import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Search from '../pages/search';
import CoursePreview from '../pages/coursePreview';

const screens = {
    Search: {
        screen: Search
    },
    CoursePreview: {
        screen: CoursePreview
    }
}
const CoursePreviewStack = createStackNavigator(screens);

export default createAppContainer(CoursePreviewStack);