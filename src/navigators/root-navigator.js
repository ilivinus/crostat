import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeNavigator from './home-navigator';
import SettingScreen from '../components/Settings'
//import BackButton from '../components/commons/BackButton';
import CryptoDetailScreen from '../containers/CryptoDetails';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

const RootNavigator = createStackNavigator({
  Home: {
    screen: HomeNavigator,
    navigationOptions: (props) => ({      
      headerTitle: 'CloseCross',
      // headerTitleStyle: {
      //   color: props.screenProps.theme.headerTitleColor,
      // },
      // headerStyle: {
      //   backgroundColor: props.screenProps.theme.tabBarColor,
      // },
      // headerRight: <ButtonSearch />,]
      headerRight : <Icon name="ios-settings" size={25} onPress={()=>props.navigation.navigate("Setting")} />// <BackButton goBack={()=>props.navigation.navigate("Setting")} />
    }),
  },
  CryptoDetailsScreen: {
    screen: CryptoDetailScreen,
    navigationOptions: (props) => ({
      headerTitle: props.navigation.state.params.name,
      //headerBackTitle: null,
      headerTitleStyle: {
        color: props.screenProps.theme.headerTitleColor,
      },
      headerStyle: {
        backgroundColor: props.screenProps.theme.tabBarColor,
      },
      //headerLeft: <BackButton goBack={props.navigation.goBack} />,
    }),
  },
  Setting: {
    screen: SettingScreen,
    navigationOptions: (props) => ({
      headerTitle: 'Settings',
      headerTitleStyle: {
        color: props.screenProps.theme.headerTitleColor,
      },
      headerStyle: {
        backgroundColor: props.screenProps.theme.tabBarColor,
      },
      headerRight: null,
    }),
  },
},
{
  headerMode: 'screen',
  cardStyle: {
    backgroundColor: '#161C36',
    // backgroundColor: 'transparent',
    // shadowColor: 'transparent'
  },
},
);
const ConnectedRootNavigator = connect((state)=>({
  screenProps: {
    theme: state.setting.theme,
  }
}))(RootNavigator)
export default createAppContainer(ConnectedRootNavigator);