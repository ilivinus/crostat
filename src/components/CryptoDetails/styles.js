import React from 'react';
import { StyleSheet, View } from 'react-native';
import { metrics } from '../../utils/constants/index'
const styles = StyleSheet.create({
    metaWrapper: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 1,
    },
    root: {
        flex: 1,
    },
    cryptoDetailsRoot: {
        height: 50,
        width: '95%',
        marginVertical: 1,
    },
    titleWrapper: {        
        justifyContent: 'flex-start',             
        alignSelf : 'center'
    },
    valueWrapper : {
        justifyContent : 'flex-end',
        alignSelf : 'center'
    },
    card: {
        padding: 5,
        borderRadius: 0,
        flex: 1,
        alignSelf: 'stretch',
        flexDirection : 'row',  
        justifyContent : 'space-between',
        ...metrics.shadow.basic
    },
});

export default styles;