import React, { PureComponent } from 'react';
import CryptoDetailComponent from '../../components/CryptoDetails';
import { getIfPercentNegative } from '../../utils/helpers/getIfPercentNegative';
import {connect} from 'react-redux';

class CryptoDetailsContainer extends PureComponent {
  state = {
    refreshing: false,
  };

  _percent1hColor(percentChange1h) {
    const _percentChang1h = percentChange1h || '0';

    if (getIfPercentNegative(_percentChang1h)) {
      return this.props.screenProps.theme.red;
    }

    return this.props.screenProps.theme.green;
  }

  _percent24hColor(percentChange24h) {
    const _percentChang24h = percentChange24h || '0';

    if (getIfPercentNegative(_percentChang24h)) {
      return this.props.screenProps.theme.red;
    }

    return this.props.screenProps.theme.green;
  }

  _percent7dColor(percentChange7d) {
    const _percentChang7d = percentChange7d || '0';
    if (getIfPercentNegative(_percentChang7d)) {
      return this.props.screenProps.theme.red;
    }

    return this.props.screenProps.theme.green;
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.props.refetch({ coinId: this.props.coin.id }, null, null, {
      force: true,
    });
    this.setState({ refreshing: false });
  };

  render() {

    return (
        <CryptoDetailComponent
        {...this.state}
        {...this.props}
        _onRefresh={this._onRefresh}
        _percent1hColor={this._percent1hColor}
        _percent24hColor={this._percent24hColor}
        _percent7dColor={this._percent7dColor}
         />
    );
  }
}
//  {
//   coin: {
//     id: "00",
//     priceUsd: 0,
//     marketCapUsd: 0,
//     priceBtc: 0,
//     totalSuply: 0,
//     volumeUsd24h: 0,
//     percentChange1h: 0,
//     percentChange24h: 0,
//     percentChange7d: 0
//   }
// }
export default connect(null,null)(CryptoDetailsContainer);