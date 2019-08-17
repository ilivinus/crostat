import { createStore, applyMiddleware , combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers'


const middleware = [logger,thunk];
const store = createStore(combineReducers(rootReducer),applyMiddleware(...middleware));

export default store;