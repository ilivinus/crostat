
import React, { PureComponent } from 'react';
import {
  Picker,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { colors } from '../../utils/constants';
import styles from './styles';

export default class SettingView extends PureComponent {

  render() {
    const { theme, darkTheme, conversionList, conversion } = this.props.screenProps;
    
    return (
      <View
        style={[
          styles.root,
          { backgroundColor: theme.cardBackground },
        ]}
      >
      <View
          style={[
            styles.card,
            { backgroundColor: theme.tabBarColor },
          ]}
        >
          <View style={styles.cardNameWrapper}>
            <Text
              style={[styles.cardText, { color: theme.textColor }]}
            >
              DARK THEME
            </Text>
          </View>
          <View style={styles.sliderWrapper}>
            <Switch
              thumbColor={colors.primary}
              onValueChange={this.props._handleValueChange}
              trackColor={colors.primary}
              value={darkTheme}
            />
          </View>
        </View>

        <View
          style={[
            styles.card,
            { backgroundColor: theme.tabBarColor },
          ]}
        >        
          <View style={styles.cardNameWrapper}>
            <Text
              style={[styles.cardText, { color: theme.textColor }]}
            >
              CONVERSION
            </Text>
          </View>
          <View style={styles.sliderWrapper}>
            <Picker
              selectedValue={conversion}                            
              style={{ height: 50, width: 100, color : colors.primary }}
              onValueChange={this.props._handleConversionChange} >
              {conversionList.map(m =>(<Picker.Item key={m} label={m} value={m} />))}
            </Picker>            
          </View>
        </View>
        
        <TouchableOpacity onPress={this.props._onFeedbackPress}>
          <View
            style={[
              styles.card,
              { backgroundColor: theme.tabBarColor },
            ]}
          >
            <View style={styles.cardNameWrapper}>
              <Text
                style={[styles.cardText, { color: theme.textColor }]}
              >
                CONTACT ME
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}