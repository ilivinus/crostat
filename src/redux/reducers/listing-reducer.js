import { LATEST_LISTING_SUCCESS, REQUEST_LATEST_LISTING, LATEST_LISTING_FAILURE, NEW_DATA_CONVERSION_CHANGE } from '../actions/action-types';

const initialState = {
    loading: false,
    data: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case REQUEST_LATEST_LISTING:
            return {
                ...state,
                loading: true
            }
        case LATEST_LISTING_FAILURE:
            return {
                ...state,
                loading: false
            }
        case NEW_DATA_CONVERSION_CHANGE:
            let crypto = (action.payload || [])
                .map(m => ({ [m.symbol]: m }))
                .reduce((prev, curr) => ({ ...prev, ...curr }), {});
            return {
                ...state,
                loading: false,
                data: Object.assign({}, crypto)
            }
        case LATEST_LISTING_SUCCESS:
            let cryptos = (action.payload || [])
                .map(m => ({ [m.symbol]: m }))
                .reduce((prev, curr) => ({ ...prev, ...curr }), {});
            return {
                ...state,
                loading: false,
                data: Object.assign({}, state.data, cryptos)
            }
        default:
            return state;
    }
}