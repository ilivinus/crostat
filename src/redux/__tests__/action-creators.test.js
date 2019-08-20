import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { SET_CONVERSION_CURRENCY, REQUEST_LATEST_LISTING, NEW_DATA_CONVERSION_CHANGE } from '../actions/action-types';
import { fetchDataOnConversionChange } from '../actions/action-creators';



const middlewares = [thunk];
const mockStore  = configureMockStore(middlewares);

describe('#async-action-creators',()=>{
    it('should render noting',() =>{
        
    })

    // afterEach(()=>{
    //     fetchMock.restore();
    // })

    // it('should create LATEST_LISTING_SUCCESS when crypto listing is pulled successfully',()=>{
    //     let start = 1, limit = 20, conversion = "USD";

    //     fetchMock.getOnce(`/v1/cryptocurrency/listings/latest?start=${start}&limit=${limit}&convert=${conversion}`,{
    //         body : { listing : ['listing1', 'listing2']},
    //         headers : { 'content-Type' : 'application/json' }
    //     })
    //     const store = mockStore({ listing : [], setting : { conversion : "USD"}});

    //     const expectedActions = [
    //         { type : REQUEST_LATEST_LISTING },
    //         { type : SET_CONVERSION_CURRENCY, payload : "USD"},
    //         { type : NEW_DATA_CONVERSION_CHANGE , payload : ['listing1', 'listing2']}            
    //     ];
    //     return store.dispatch(fetchDataOnConversionChange(start,limit,conversion)).then(()=>{
    //         expect(store.getActions()).toEqual(expectedActions);
    //     })
    // })
})