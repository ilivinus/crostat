import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ButtonHeader from './ButtonHeader';
import { colors } from '../../utils/constants';

const ICON_SIZE = 25;


export default function BackButton({ goBack }) {
  return (
    <ButtonHeader onPress={goBack} side="left">
      <Ionicons color={colors.lightGrey} name="ios-arrow-back" size={ICON_SIZE} />
    </ButtonHeader>
  );
}