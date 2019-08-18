import React from 'react';
import { StyleSheet, View } from 'react-native';
import { metrics } from '../../utils/constants/index'
const styles = StyleSheet.create({
    metaWrapper: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        alignItems: 'center',
        paddingVertical: 10,
    },
    root: {
        flex: 1,
    },
    cryptoDetailsRoot: {
        height: 90,
        width: '45%',
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleWrapper: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        padding: 5,
        borderRadius: 5,
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        ...metrics.shadow.basic
    },
});

export default styles;