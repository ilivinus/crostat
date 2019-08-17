import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

import { colors } from '../utils/constants';

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
//  size?: 'large' | 'small',


function Loading({ color = colors.primary, size = 'large' }){
  return (
    <View style={styles.root}>
      <ActivityIndicator color={color} size={size} />
    </View>
  );
}

export default Loading;