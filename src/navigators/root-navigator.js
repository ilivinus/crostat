import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../containers/Settings'
import SettingButton from '../components/Settings/SettingButton';
import CryptoDetailScreen from '../containers/CryptoDetails';
import { connect } from 'react-redux';


const RootNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: (props) => ({      
      headerTitle: 'Crypto Listing',      
      headerTitleStyle: {
        color: props.screenProps.theme.headerTitleColor,
      },
      headerStyle: {
        backgroundColor: props.screenProps.theme.tabBarColor,
      },
      headerRight : <SettingButton {...props} goBack={()=>props.navigation.navigate("Setting")} />
    }),
  },
  CryptoDetailsScreen: {
    screen: CryptoDetailScreen,
    navigationOptions: (props) => ({
      headerTitle: props.navigation.state.params.name,
      //headerBackTitle: null,
      headerTintColor :  props.screenProps.theme.headerTitleColor,
      headerTitleStyle: {
        color: props.screenProps.theme.headerTitleColor,
      },
      headerStyle: {
        backgroundColor: props.screenProps.theme.tabBarColor,
      }
    }),
  },
  Setting: {
    screen: SettingScreen,
    navigationOptions: (props) => ({
      headerTitle: 'Settings',
      headerTintColor : props.screenProps.theme.headerTitleColor,
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
  initialRouteName : 'Home',
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
    darkTheme : state.setting.darkTheme,
    conversionList : state.setting.conversionList,
    conversion : state.setting.conversion,
  }
}))(RootNavigator)

export default createAppContainer(ConnectedRootNavigator);