import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import { Text } from './Typographie';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

function EmptyStateView({ title, subTitle, theme }) {
  return (
    <View style={styles.root}>
      <Text style={{ color: theme.textColor }}>{title}</Text>
      <Text style={{ color: theme.textColor }}>{subTitle}</Text>
    </View>
  );
}

export default connect((state) => ({
  theme:  state.setting.theme
}))(EmptyStateView);