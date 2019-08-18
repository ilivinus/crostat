import { LATEST_LISTING_SUCCESS, LATEST_LISTING_FAILURE, REQUEST_LATEST_LISTING, TOGGLE_APP_THEME } from './action-types';

export const getListing = (data) => ({ type : LATEST_LISTING_SUCCESS, payload : data });
export const getListingError = (data) => ({ type : LATEST_LISTING_FAILURE, payload : data });
export const requestListing = ({ type : REQUEST_LATEST_LISTING });
export const toggleTheme  = () =>({ type : TOGGLE_APP_THEME });
