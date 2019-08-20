import { createStore, applyMiddleware , combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage';

const persistConfig  = {
    key :'crostat:root',
    storage,
    whitelist : ['setting']
}
const middleware = [logger,thunk];
const persistedRootReducer = persistReducer(persistConfig,combineReducers(rootReducer));
const store = createStore(persistedRootReducer,applyMiddleware(...middleware));
const persistor = persistStore(store);

export  { store, persistor };