
import React from 'react';
import { View } from 'react-native';
import { Text, NameText } from '../../components/commons/Typographie';
import { colors } from '../../utils/constants';
import PropType from 'prop-types'
import styles from './styles';

function CryptoCard({ title, value, textColor, backgroundColor }) {
  return (
    <View style={styles.cryptoDetailsRoot}>
      <View style={styles.titleWrapper}>
        <NameText style={{ color: colors.lightGrey }}>{title}</NameText>
      </View>
      <View style={[styles.card, { backgroundColor }]}>
        <Text
          numberOfLines={1}
          style={{ color : textColor }}
        >
          {value}
        </Text>
      </View>
    </View>
  );
}
CryptoCard.propTypes = {
    title : PropType.string,
    value : PropType.any,
    textColor : PropType.string,
    backgroundColor: PropType.string
}
export default CryptoCard;