import React, {Component} from 'react';
import { Provider } from 'react-redux';
//import {Platform, StyleSheet, Text, View} from 'react-native';
import AppContainer from './components/AppContainer'
import rootStore from './redux/stores';
import RootNav from './navigators/root-navigator'
export default class RootApp extends Component {
  render(){
    return(
    <Provider store={rootStore}>
      <AppContainer />
    </Provider>);
  }
}
