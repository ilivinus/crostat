import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

export default (props) => (
    <View style={styles.settingButton}>
        <Icon name="ios-settings" color={props.screenProps.theme.headerTitleColor} size={25} onPress={props.goBack} />
    </View>
)