import { themes } from '../../utils/constants';
import { TOGGLE_APP_THEME, TOGGLE_CONVERSION_CURRENCY } from '../actions/action-types';


const initialState = {
    darkTheme : true,
    theme : themes.dark,
    conversion : "USD"
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
        case TOGGLE_CONVERSION_CURRENCY:
         return {
             ...state,
             conversion : action.payload,
         }
        default:
         return state;
    }
}