import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';
import CryptoListing from '../index';
import CryptoListingPresenter from '../presenter';
import { themes } from '../../../utils/constants'

Enzyme.configure({ adapter: new Adapter() })

describe('#CryptoListing index', () => {

    let props;
    beforeEach(() => {
        const _keyExtractor = jest.fn();
        const _onEndReached = jest.fn();
        const _onRefresh = jest.fn();
        const refreshing = false;
        const _renderItem = jest.fn();
        props = {
            screenProps: {
                theme: themes
            },
            isLoading: false,
            listing: [],
            _keyExtractor,
            _onEndReached,
            _onRefresh,
            refreshing,
            _renderItem
        }
    })
    it('should render listing properly', () => {
        const component = renderer.create(<CryptoListing {...props} />).toJSON();

        expect(component).toMatchSnapshot();
    })
})

describe('#CryptoListing presenter', () => {

    let props;
    beforeEach(() => {
        props = {
            name: 'bitcoin',
            id: '2',
            percentChange1h: 23,
            priceUsd: 2,
            symbol: 'BTC',
            volume24h: 329,
            total: 13771,
            maxSupply: 379832,
            convert: 'USD',
            lastUpdate: '155322323434',
            conversion : 'USD',
            screenProps : {
                theme : themes
            }
        }

    })
    it('should render listing properly', () => {
        const component = renderer.create(<CryptoListingPresenter {...props} />).toJSON();

        expect(component).toMatchSnapshot();
    })

    
})
