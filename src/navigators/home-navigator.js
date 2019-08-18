import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import QuoteScreen from '../screens/QuoteScreen';
import { colors } from '../utils/constants/index'
//import Ionicons from 'react-native-vector-icons/Ionicons';


const HomeNavigator = createMaterialTopTabNavigator(
    {
      Home: {
        screen: HomeScreen,
        navigationOptions: {
         headerTitle : 'Home',
          // tabBarIcon: ({ focused }) => (
          //   <Ionicons
          //     name={"ios-home"}
          //     size={30}
          //     color={"black"}
          //   />
          // )
        }
      },      
      Quotes: {
        screen: QuoteScreen,
        navigationOptions: {
          headerTitle : 'Quotes',
          // tabBarIcon: ({ focused }) => (
          //   <Ionicons
          //     name={"ios-star"}
          //     size={30}
          //     color={"black"}
          //   />
          // )
        }
      }
    },
    {
      tabBarPosition: "top",
      lazy : true,
      animationEnabled : true,
      swipeEnabled : true,
      tabBarOptions: {
        indicatorStyle :{
          backgroundColor : colors.primary
        },
        activeTintColor : colors.primary,
        inactiveTintColor : colors.lightGrey,
        pressColor : colors.primary,
        // showLabel: true,
        //activeBackgroundColor : '#c5d9f3',
        style: {
         // backgroundColor: 'red',
          //backgroundColor: "#FBFBFB",
          height: 45,

        }
      }
    }
  );
  
  export default HomeNavigator;
