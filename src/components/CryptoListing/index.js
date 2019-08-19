import React, { PureComponent } from 'react';
import { FlatList, RefreshControl, View, ActivityIndicator } from 'react-native';
import { colors } from '../../utils/constants';
import styles from './styles';
import Spinner from '../commons/Loading'
const CryptoListing = (props) => (
  <View
    style={[styles.flatListRoot, { backgroundColor: props.screenProps.theme.tabBarColor }]}
  >
    {props.isLoading && props.listing.length == 0 
    ? (<Spinner />) : (<FlatList
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      contentContainerStyle={styles.contentContainerList}
      data={props.listing}
      keyExtractor={props._keyExtractor}
      onEndReached={props._onEndReached}
      onEndReachedThreshold={0.5}
      ListFooterComponent={() => props.isLoading ?
         <ActivityIndicator color={{ color : '#fff'}} size="large" /> : <View />}
      refreshControl={
        <RefreshControl
          onRefresh={props._onRefresh}
          refreshing={props.refreshing}
          tintColor={colors.primary}
        />
      }
      renderItem={props._renderItem}
    />)}
  </View>

);

export default CryptoListing;