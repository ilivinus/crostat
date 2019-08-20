import { getListing, 
    toggleTheme,
    requestListing
 } from '../actions/actionables';
import {
    REQUEST_LATEST_LISTING,
    TOGGLE_APP_THEME,
    LATEST_LISTING_SUCCESS
} from '../actions/action-types';


describe('#actions',()=>{
    it('should create an action to request crypto listings',()=>{
        const expectedAction = {
            type : REQUEST_LATEST_LISTING
        }
        expect(requestListing).toEqual(expectedAction);
    })

    it('should push create action for returning the crypto listings from api', () =>{
        const expectedAction = {
            type : LATEST_LISTING_SUCCESS,
            payload : 'success'
        }
        expect(getListing('success')).toEqual(expectedAction);
    })
    it('should create action to toggle the application theme', () =>{
        const expectedAction = {
            type : TOGGLE_APP_THEME
        }
        expect(toggleTheme()).toEqual(expectedAction);
    })
})