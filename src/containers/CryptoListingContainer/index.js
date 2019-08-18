import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import CryptoItem from '../../components/CryptoListing/presenter';
import {  PAGE_SIZE } from '../../utils/constants';
import CrypoLisitingComponent from '../../components/CryptoListing';
import { loadMore, refreshConnection } from '../../redux/actions/action-creators'
import { getQuotesListing, isListingLoading, conversionCurrency } from '../../redux/selectors';

class CryptoListingContainer extends PureComponent {
    state = {
        refreshing: false,
        startingPage : 1,
      };
    
      _renderItem = ({ item }) => (
        <CryptoItem
           {...item}
           navigation={this.props.navigation}
           screenProps={this.props.screenProps}
           convert={this.props.convert}
        />
      )
      
      _onEndReached = () => {
        if (this.props.isLoading) {
          this.props.loadMore(1,PAGE_SIZE);
        }
      };
    
      _onRefresh = async () => {
       this.setState({ refreshing: true, startingPage : 1 });
       await this.props.refetchConnection(PAGE_SIZE, 1);
       this.setState({ refreshing: false });
      };
    
      _keyExtractor = (item) => {    
        return item.id;
      }
      render(){
          return (
              <CrypoLisitingComponent
              _onRefresh={this._onRefresh}
              _onEndReached={this._onEndReached}
              _onRefresh={this._onRefresh}
              _keyExtractor={this._keyExtractor}
              _renderItem={this._renderItem}
              {...this.props}
              {...this.state}
               />
          );
      }
}
const mapStateToProps = state =>{
  return ({
    isLoading : isListingLoading(state),
    convert : conversionCurrency(state), //conversion currency $ or BTC
    listing : getQuotesListing(state) 
  });
}
const mapDispatchToProps = dispatch =>({
    loadMore,
    refreshConnection
})
export default connect(mapStateToProps, mapDispatchToProps)(CryptoListingContainer);
  