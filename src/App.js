import React, {Component} from 'react';
import { Provider } from 'react-redux';
//import {Platform, StyleSheet, Text, View} from 'react-native';
import AppContainer from './containers/AppContainer'
import rootStore from './redux/stores';

export default class RootApp extends Component {
  render(){
    return(
    <Provider store={rootStore}>
      <AppContainer />
    </Provider>);
  }
}
