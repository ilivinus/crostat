import React, { PureComponent } from 'react';
import { FlatList, RefreshControl, View } from 'react-native';
import { colors, PAGE_SIZE } from '../../utils/constants';
import styles from './styles';

const CryptoListing = (props) => (
      <View
        style={[styles.flatListRoot, { backgroundColor: props.screenProps.theme.tabBarColor }]}
      >
        <FlatList
          ItemSeparatorComponent={()=><View style={styles.separator} />}
          contentContainerStyle={styles.contentContainerList}
          data={props.listing}
          keyExtractor={props._keyExtractor}
          onEndReached={props._onEndReached}
          onEndReachedThreshold={0.5}
          refreshControl={
          <RefreshControl
              onRefresh={props._onRefresh}
              refreshing={props.refreshing}
              tintColor={colors.primary}
            />
          }
          renderItem={props._renderItem}
        />
      </View>
  
  );

export default CryptoListing;