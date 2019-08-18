import * as React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
//import {  } from '../../utils/constants/index';

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default function ButtonHeader({
  side,
  children,
  onPress,
  disabled,
}) {
  const _style = {
    marginRight: side === 'right' ? 15 : 0,
    marginLeft: side === 'left' ? 15 : 0,
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      //hitSlop={metrics.hitSlop(20)}
      onPress={onPress}
      style={[styles.root, _style]}
    >
      {children}
    </TouchableOpacity>
  );
}