import {light} from '../Themes/theme';
import { SWITCH_THEME } from './themeActions';

const initialState = {
    theme: light,
}

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_THEME:
            return { theme: action.theme }
        default:
            return {theme: state}
    }
}

export default themeReducer;