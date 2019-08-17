import { themes } from '../../utils/constants';
import { TOGGLE_APP_THEME } from '../actions/action-types';


const initialState = {
    darkTheme : true,
    theme : themes.dark
}

const toggleTheme = (state) => state.darkTheme == true 
?  ({ darkTheme : false, theme : themes.light })
:  ({ darkTheme : true, theme :  themes.dark });

export default function(state = initialState, action){
    switch(action.type){
        case TOGGLE_APP_THEME:
            return {
                ...state,
               ...toggleTheme(state)
            }
        default:
         return state;
    }
}