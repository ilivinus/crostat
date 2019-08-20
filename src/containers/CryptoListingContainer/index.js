import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import CryptoItem from '../../components/CryptoListing/presenter';
import {  PAGE_SIZE } from '../../utils/constants';
import CrypoLisitingComponent from '../../components/CryptoListing';
import { loadMore, fetchLatestListing } from '../../redux/actions/action-creators'
import { getQuotesListing, isListingLoading } from '../../redux/selectors';

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
        />
      )
      
      _onEndReached = () => {
        if (!this.props.isLoading) {
          this.props.loadMore(1,PAGE_SIZE);
        }
      };
    
      _onRefresh = () => {
       this.setState({ refreshing: true, startingPage : 1 });
       this.props.refetchConnection(1,PAGE_SIZE);
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
    listing : getQuotesListing(state) 
  });
}
const mapDispatchToProps = dispatch =>({
    loadMore : (start,pageSize) => dispatch(loadMore(start,pageSize)),
    refetchConnection : (start,pageSize) => dispatch(fetchLatestListing(start,pageSize))
})
export default connect(mapStateToProps, mapDispatchToProps)(CryptoListingContainer);
  