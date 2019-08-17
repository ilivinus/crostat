import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../utils/constants';

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: 1,
    flex: 1,
    justifyContent: 'center',
  },
});

function HighLightTab({ children, focused }) {
  let footerHeight;

  if (focused) {
    footerHeight = 1;
  } else {
    footerHeight = 0;
  }

  return (
    <View
      style={[
        styles.root,
        { borderBottomColor: colors.primary, borderBottomWidth: footerHeight },
      ]}
    >
      {children}
    </View>
  );
}

export default HighLightTab;