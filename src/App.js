import React, { Component } from 'react';
import { Provider } from 'react-redux';
//import {Platform, StyleSheet, Text, View} from 'react-native';
import AppContainer from './containers/AppContainer'
import { store, persistor } from './redux/stores';
import { PersistGate } from 'redux-persist/integration/react';
import Loading from './components/commons/Loading';

export default class RootApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Loading/>}  persistor={persistor} >
          <AppContainer />
        </PersistGate>
      </Provider>);
  }
}
