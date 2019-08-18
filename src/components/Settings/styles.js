import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    root: {
      flex: 1,
    },
    card: {
      flexDirection: 'row',
      height: 50,
      marginTop: 5,
      paddingHorizontal: 10,
      width: '100%',
    },
    cardNameWrapper: {
      flex: 1,
      justifyContent: 'center',
    },
    cardText: { 
      fontSize: 16,
      fontWeight: '600',
    },
    sliderWrapper: {
      alignItems: 'flex-end',
      flex: 0.4,
      justifyContent: 'center',
    },
    settingButton : {
        paddingRight : 15,
    }
  });
  