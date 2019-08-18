import React, { PureComponent } from 'react';
import { ScrollView, View, RefreshControl } from 'react-native';
import CryptoCard from './presenter';
import { getIfPercentNegative } from '../../utils/helpers/getIfPercentNegative';
import { moneyThousand, thousandSpace } from '../../utils/helpers/numbers';
import { colors } from '../../utils/constants';
import PropType from 'prop-types';
import styles from './styles';

class CryptoDetailsComponent extends PureComponent {
  render() {
    const { coin } = this.props;
    const { theme } = this.props.screenProps;
    console.log(this.props,"###@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
    const _marketCap = thousandSpace(coin.marketCapUsd);
    const _percentChang1h = thousandSpace(coin.percentChange1h);
    const _percentChang24h = thousandSpace(coin.percentChange24h);
    const _percentChang7d = thousandSpace(coin.percentChange7d);
    const _price = moneyThousand(coin.priceUsd);
    const _priceBtc = thousandSpace(coin.priceBtc);
    const _totalSuply = thousandSpace(coin.totalSuply);
    const _volume = thousandSpace(coin.volumeUsd24h);

    return (
      <View style={[styles.root, { backgroundColor: theme.cardBackground }]}>
        <ScrollView
          contentContainerStyle={styles.metaWrapper}
          refreshControl={
            <RefreshControl
              onRefresh={this.props._onRefresh}
              refreshing={this.props.refreshing}
              tintColor={colors.primary}
            />
          }
        >
          <CryptoCard
            backgroundColor={theme.tabBarColor}
            textColor={theme.textColor}
            title="Price USD"
            value={_price}
          />
          <CryptoCard
            backgroundColor={theme.tabBarColor}
            textColor={theme.textColor}
            title="Market Cap"
            value={_marketCap}
          />
          <CryptoCard
            backgroundColor={theme.tabBarColor}
            textColor={theme.textColor}
            title="Price BTC"
            value={_priceBtc}
          />
          <CryptoCard
            backgroundColor={theme.tabBarColor}
            textColor={theme.textColor}
            title="Total Supply"
            value={_totalSuply}
          />
          <CryptoCard
            backgroundColor={theme.tabBarColor}
            textColor={theme.textColor}
            title="VOLUME"
            value={_volume}
          />
          <CryptoCard
            backgroundColor={theme.tabBarColor}
            textColor={this.props._percent1hColor(_percentChang1h)}
            title="% CHANGE 1H"
            value={_percentChang1h}
          />
          <CryptoCard
            backgroundColor={theme.tabBarColor}
            textColor={this.props._percent24hColor(_percentChang24h)}
            title="% CHANGE 24H"
            value={_percentChang24h}
          />
          <CryptoCard
            backgroundColor={theme.tabBarColor}
            textColor={this.props._percent7dColor(_percentChang7d)}
            title="% CHANGE 7D"
            value={_percentChang7d}
          />
        </ScrollView>
      </View>
    );
  }
}
CryptoDetailsComponent.propTypes = {
  coin: PropType.shape({
    id: PropType.string,
    priceUsd: PropType.number,
    marketCapUsd: PropType.number,
    priceBtc: PropType.number,
    totalSuply: PropType.number,
    volumeUsd24h: PropType.number,
    percentChange1h: PropType.number,
    percentChange24h: PropType.number,
    percentChange7d: PropType.number
  })
}
CryptoDetailsComponent.defaultProps = {
  coin: {
    id: "00",
    priceUsd: 0,
    marketCapUsd: 0,
    priceBtc: 0,
    totalSuply: 0,
    volumeUsd24h: 0,
    percentChange1h: 0,
    percentChange24h: 0,
    percentChange7d: 0
  }
}
export default CryptoDetailsComponent;