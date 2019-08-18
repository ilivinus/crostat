import React, { PureComponent } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, NameText } from '../commons/Typographie';
import { colors } from '../../utils/constants';
import { getIfPercentNegative } from '../../utils/helpers/getIfPercentNegative';
import { moneyThousand } from '../../utils/helpers/numbers';
import styles from './styles';
import PropType from 'prop-types';

class CryptoItemView extends PureComponent {
  _getIfNeg(percentChange) {
    const _percentChange = percentChange || '0';
    return getIfPercentNegative(_percentChange);
  }

  _getPercentChange(percent) {
    let str;
    const style = {};

    const color = this._getIfNeg(percent) ? colors.red : colors.green;
    
    if (percent == null) {
      str = '##';
      style.color = this.props.screenProps.theme.textColor;
    } else {
      str = `${parseFloat(percent).toFixed(2)}%`;
      style.color = color;
    }

    return <Text style={style}>{str}</Text>;
  }

  _getIconPercent(percent) {
    if (percent == null) {
      return null;
    }

    const props = {
      size: 25,
    };

    if (this._getIfNeg(percent)) {
      props.name = 'ios-trending-down';
      props.color = colors.red;
    } else {
      props.name = 'ios-trending-up';
      props.color = colors.green;
    }

    return <Ionicons {...props} />;
  }

  _getIconArrow(percent) {
    const props = {
      size: 25,
    };

    if (this._getIfNeg(percent)) {
      props.name = 'ios-arrow-round-down';
      props.color = colors.red;
    } else {
      props.name = 'ios-arrow-round-up';
      props.color = colors.green;
    }

    return <Ionicons  {...props} />;
  }

  _getPrice() {
    return moneyThousand(this.props.priceUsd);
  }

  _onNavigationPress = () => {
    this.props.navigation.navigate('CryptoDetailsScreen', {
      cryptoId: this.props.id,
      name: `${this.props.name} (${this.props.symbol})`,
    });
  };

  render() {
    if (this.props.name == null) {
      return null;
    }
    const { theme } = this.props.screenProps;

    return (
      <TouchableOpacity
        onPress={this._onNavigationPress}
        style={[styles.root, { backgroundColor: theme.cardBackground }]}
      >
      <Text style={[styles.volumeText, { color: theme.textColor }]}>
          <NameText style={[styles.volumeText, { color: colors.lightGrey }]}>
            Vol (24h)
          </NameText>{' '}
          {this.props.volume24h}{`(${this.props.convert})`}
        </Text>
        <View style={styles.titleWrapper}>
          <Text style={[styles.title, { color: theme.textColor }]}>
            {this.props.symbol}
          </Text>
        </View>
        <View style={styles.metaWrapper}>
        <Text style={{ color: theme.textColor }}>
          <NameText style={{ color: colors.lightGrey }}>1h</NameText>          
        </Text>
          {this._getIconPercent(this.props.percentChange1h)}
          {this._getPercentChange(this.props.percentChange1h)}
        </View>
        <View style={styles.metaWrapper}>
        <Text style={{ color: theme.textColor }}>
          <NameText style={{ color: colors.lightGrey }}>24h</NameText>          
        </Text>
          {this._getIconPercent(this.props.percentChange24h)}
          {this._getPercentChange(this.props.percentChange24h)}
        </View>
        <View style={styles.metaWrapper}>
        <Text style={{ color: theme.textColor }}>
          <NameText style={{ color: colors.lightGrey }}>7d</NameText>          
        </Text>
          {this._getIconPercent(this.props.percentChange7d)}
          {this._getPercentChange(this.props.percentChange7d)}
        </View>
        <Text style={[styles.holdingText, { color: theme.textColor }]}>
          <NameText style={[styles.holdingText, { color: colors.lightGrey }]}>
            {this.props.name}
          </NameText>
        </Text>
        <Text style={[styles.priceUsdText, { color: theme.textColor }]}>
          <NameText style={[styles.priceUsdText, { color: colors.lightGrey }]}>
            Price
          </NameText>{' '}
          {this._getPrice()}{`(${this.props.convert})`}
        </Text>
      </TouchableOpacity>
    );
  }
}

CryptoItemView.propTypes = {
  name: PropType.string,
  id: PropType.any,
  percentChange1h: PropType.number,
  priceUsd: PropType.number,
  symbol: PropType.string,
  volume24h: PropType.number,
  total: PropType.number,
  maxSupply: PropType.number,
  convert : PropType.string
}
export default CryptoItemView;