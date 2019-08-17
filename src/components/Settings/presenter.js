
import React, { PureComponent } from 'react';
import {
  Linking,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import { colors, properties, deviceInfo } from '../../utils/constants';
import { toggleTheme } from '../../redux/actions/actionables';

const styles = StyleSheet.create({
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
});


class SettingScreen extends PureComponent{

  _handleValueChange = () => {
    this.props.toggleTheme();
  };

  _onFeedbackPress = async () => {
    if (deviceInfo.isEmulator) {
      return null;
    }
    const url = `mailto:${properties.feedbackEmail.email}?subject=${properties
      .feedbackEmail.subject}`;
    const _canOpen = await Linking.openURL(url);

    if (_canOpen) {
      return Linking.openURL(url);
    }

    return null;
  };

  render() {
    return (
      <View
        style={[
          styles.root,
          { backgroundColor: this.props.theme.cardBackground },
        ]}
      >
        <View
          style={[
            styles.card,
            { backgroundColor: this.props.theme.tabBarColor },
          ]}
        >
          <View style={styles.cardNameWrapper}>
            <Text
              style={[styles.cardText, { color: this.props.theme.textColor }]}
            >
              DARK THEME
            </Text>
          </View>
          <View style={styles.sliderWrapper}>
            <Switch
              onTintColor={colors.primary}
              onValueChange={this._handleValueChange}
              tintColor={colors.primary}
              value={this.props.darkTheme}
            />
          </View>
        </View>
        <TouchableOpacity onPress={this._onFeedbackPress}>
          <View
            style={[
              styles.card,
              { backgroundColor: this.props.theme.tabBarColor },
            ]}
          >
            <View style={styles.cardNameWrapper}>
              <Text
                style={[styles.cardText, { color: this.props.theme.textColor }]}
              >
                FEEDBACK
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(
  (state) => ({
    darkTheme: state.setting.darkTheme,
    theme: state.setting.theme,
  }),
  { toggleTheme },
)(SettingScreen);