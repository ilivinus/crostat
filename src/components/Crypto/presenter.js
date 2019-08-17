import React, { PureComponent } from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { Text, NameText } from '../commons/Typographie';

import { colors } from '../../utils/constants';
import { getIfPercentNegative } from '../../utils/helpers/getIfPercentNegative';
import { moneyThousand } from '../../utils/helpers/numbers';

const COIN_ICON_SIZE = 30;

const styles = StyleSheet.create({
  coinIcon: {
    height: COIN_ICON_SIZE,
    width: COIN_ICON_SIZE,
  },
  contentWrapper: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  holdingText: {
    bottom: 5,
    left: 10,
    position: 'absolute',
  },
  metaWrapper: {
    alignItems: 'center',
    flex: 0.4,
    justifyContent: 'center',
  },
  priceUsdText: {
    bottom: 5,
    position: 'absolute',
    right: 10,
  },
  root: {
    alignSelf: 'center',
    flexDirection: 'row',
    height: 130,
    padding: 5,
    position: 'relative',
    width: '100%',
  },
  title: {
    marginTop: 5,
    textAlign: 'center',
  },
  titleWrapper: {
    alignItems: 'center',
    flex: 0.4,
    justifyContent: 'center',
  },
  totalWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  noHolding: {
    color: colors.lightGrey,
  },
});

class Coin extends PureComponent{
  _getIfNeg() {
    const _percentChange1h =
      idx(this.props, _ => _.coin.percentChange1h) || '0';

    return getIfPercentNegative(_percentChange1h);
  }

  _getPercentChange1h(){
    let str;
    const style = {};

    const color = this._getIfNeg() ? colors.red : colors.green;

    if (this.props.coin.percentChange1h == null) {
      str = 'No Value :(';
      style.color = this.props.theme.textColor;
    } else {
      str = `${parseFloat(this.props.coin.percentChange1h).toFixed(2)}%`;
      style.color = color;
    }

    return <Text style={style}>{str}</Text>;
  }

  _getImage() {
    return CoinMarket.getImage(idx(this.props, _ => _.coin.cryptoId), 32);
  }

  _getIconPercent() {
    if (this.props.coin.percentChange1h == null) {
      return null;
    }

    const props = {
      size: 25,
    };

    if (this._getIfNeg()) {
      props.name = 'ios-trending-down';
      props.color = colors.red;
    } else {
      props.name = 'ios-trending-up';
      props.color = colors.green;
    }

    return <Ionicons {...props} />;
  }

  _getIconArrow() {
    const props = {
      size: 25,
    };

    if (this._getIfNeg()) {
      props.name = 'ios-arrow-round-down';
      props.color = colors.red;
    } else {
      props.name = 'ios-arrow-round-up';
      props.color = colors.green;
    }

    return <Ionicons {...props} />;
  }

  _getPrice() {
    return moneyThousand(this.props.coin.priceUsd);
  }

  _onNavigationPress = () => {
    this.props.navigation.navigate('CoinDetailsScreen', {
      coinId: this.props.coin.id,
      name: this.props.coin.name,
    });
  };

  render() {
    if (this.props.coin == null) {
      return null;
    }

    const { theme } = this.props;

    return (
      <TouchableOpacity
        onPress={this._onNavigationPress}
        style={[styles.root, { backgroundColor: theme.cardBackground }]}
      >
        <View style={styles.titleWrapper}>
          <Image
            resizeMode="contain"
            source={{
              uri: this._getImage(),
            }}
            style={styles.coinIcon}
          />
          <Text style={[styles.title, { color: theme.textColor }]}>
            {this.props.coin.symbol}
          </Text>
        </View>
        {this.props.entities ? (
          <View style={styles.contentWrapper}>
            <View style={styles.totalWrapper}>
              <Text style={{ color: theme.textColor }}>
                <NameText style={{ color: colors.lightGrey }}>Total:</NameText> ${this.props.total}{' '}
              </Text>
              {this._getIconArrow()}
            </View>
            <Text
              style={{ color: this._getIfNeg() ? colors.red : colors.green }}
            >
              ${this.props.amountChange}
            </Text>
          </View>
        ) : (
          <View style={styles.contentWrapper}>
            <Text style={styles.noHolding}>No holding</Text>
          </View>
        )}

        <View style={styles.metaWrapper}>
          {this._getIconPercent()}
          {this._getPercentChange1h()}
        </View>
        <Text style={[styles.holdingText, { color: theme.textColor }]}>
          <NameText style={[styles.holdingText, { color: colors.lightGrey }]}>
            Holdings:
          </NameText>{' '}
          {this.props.holding}
        </Text>
        <Text style={[styles.priceUsdText, { color: theme.textColor }]}>
          <NameText style={[styles.priceUsdText, { color: colors.lightGrey }]}>
            Price:
          </NameText>{' '}
          {this._getPrice()}
        </Text>
      </TouchableOpacity>
    );
  }
}

const CoinConnected = connect((state, props) => ({
  // entities: selectors.getAsset(state, props),
  // holding: selectors.getHolding(state, props),
  // total: selectors.getTotal(state, props),
  // amountChange: selectors.getAmountChange(state, props),
}))(Coin);
