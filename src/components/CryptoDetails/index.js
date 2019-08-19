import React, { PureComponent } from 'react';
import { ScrollView, View, RefreshControl } from 'react-native';
import CryptoCard from './presenter';
import { moneyThousand, thousandSpace } from '../../utils/helpers/numbers';
import { colors } from '../../utils/constants';
import PropType from 'prop-types';
import styles from './styles';

class CryptoDetailsComponent extends PureComponent {
  render() {
    const { crypto } = this.props;
    const { theme } = (this.props || {}).screenProps;

    const _conversion = this.props.convert;
    const _marketCap = thousandSpace(crypto.marketCapUsd);
    const _percentChang1h = thousandSpace(crypto.percentChange1h);
    const _percentChang24h = thousandSpace(crypto.percentChange24h);
    const _percentChang7d = thousandSpace(crypto.percentChange7d);
    const _price = _conversion == "USD" ? moneyThousand(crypto.priceUsd) : crypto.priceUsd.toFixed(8);
    const _totalSuply = thousandSpace(crypto.totalSuply);
    const _volume = thousandSpace(crypto.volume24h);

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
            title="Name"
            value={crypto.name}
          />
          <CryptoCard
            backgroundColor={theme.tabBarColor}
            textColor={theme.textColor}
            title="Rank"
            value={crypto.rank}
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
            title="Circulation Supply"
            value={crypto.circulatingSupply}
          />
          <CryptoCard
            backgroundColor={theme.tabBarColor}
            textColor={theme.textColor}
            title="Max Supply"
            value={crypto.maxSupply}
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
            title="Date added"
            value={crypto.dateAdded}
          />
          <CryptoCard
            backgroundColor={theme.tabBarColor}
            textColor={theme.textColor}
            title={`Price ${_conversion}`}
            value={_price}
          />

          <CryptoCard
            backgroundColor={theme.tabBarColor}
            textColor={theme.textColor}
            title="Last updated"
            value={crypto.lastUpdated}
          />
          <CryptoCard
            backgroundColor={theme.tabBarColor}
            textColor={theme.textColor}
            title="24h VOLUME"
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
  crypto: PropType.shape({
    priceUsd: PropType.number,
    marketCapUsd: PropType.number,
    priceBtc: PropType.number,
    totalSuply: PropType.number,
    volume24h: PropType.number,
    percentChange1h: PropType.number,
    percentChange24h: PropType.number,
    percentChange7d: PropType.number
  })
}
CryptoDetailsComponent.defaultProps = {
  crypto: {
    priceUsd: 0,
    marketCapUsd: 0,
    priceBtc: 0,
    totalSuply: 0,
    volume24h: 0,
    percentChange1h: 0,
    percentChange24h: 0,
    percentChange7d: 0
  }
}
export default CryptoDetailsComponent;