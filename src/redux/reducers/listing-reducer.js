import { LATEST_LISTING_SUCCESS, REQUEST_LATEST_LISTING, LATEST_LISTING_FAILURE } from '../actions/action-types';

const initialState = {
    loading : false,
    data : []
}

export default function(state = initialState,action){
    switch(action.type){
        case REQUEST_LATEST_LISTING:
            return {
                ...state,
                loading :true
            }
        case LATEST_LISTING_FAILURE:
            return {
                ...state,
                loading :false
            }
        case LATEST_LISTING_SUCCESS:
            return {
                ...state,
                loading : false,
                data : state.data.concat(action.payload)//.splice(200,Infinity)
            }
        default:
            return state;
    }
}