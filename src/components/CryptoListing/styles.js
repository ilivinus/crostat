import { StyleSheet } from 'react-native';
import { colors } from '../../utils/constants';

const COIN_ICON_SIZE = 30;

const styles = StyleSheet.create({
    flatListRoot: {
        flex: 1,
    },
    separator: {
        backgroundColor: colors.transparent,
        height: 5,
    },
    contentContainerList: {
        alignSelf: 'stretch',
    },
    symbolName :{
        top: 5,
        position: 'absolute',        
        right: 10,
    },

    coinIcon: {
        height: COIN_ICON_SIZE,
        width: COIN_ICON_SIZE,
    },
    contentWrapper: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    volumeText : {
        top: 5,
        left: 10,
        position: 'absolute',
    },
    timeText : {
        top: 5,
        right: 10,
        position: 'absolute',
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
        fontWeight: 'bold',
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

export default styles;