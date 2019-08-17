import { Platform } from 'react-native'

export const colors = {
    red: '#F8333C',
    green: '#4ADF86',
    darkGray: '#31393C',
    greyOutline: '#bbbbbb',
    primary: '#00C0FF',
    primaryLight: 'rgba(0, 192, 255, 0.15)',
    lightGrey: '#B4B4B4',
    white: '#ffffff',
    transparent: 'transparent',
    darkBlue: '#161C36',
    black: '#000',
    selectionColor: Platform.OS === 'ios' ? '#00C0FF' : undefined
  };
  
  /**
   * App themes
   */
  export const themes = {
    dark: {
      ...colors,
      tabBarColor: '#192543',
      cardBackground: colors.darkBlue,
      headerTitleColor: colors.white,
      textColor: colors.white,
      thumbTintColor: colors.white,
    },
    light: {
      ...colors,
      tabBarColor: '#F3F3F3',
      cardBackground: colors.white,
      headerTitleColor: colors.darkGray,
      textColor: colors.darkGray,
      thumbTintColor: colors.darkGray,
    },
  };
  