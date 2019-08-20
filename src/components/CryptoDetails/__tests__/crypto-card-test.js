import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';
import CryptoCard from '../presenter';
import CryptoCardComponent from '../index';
import { themes } from '../../../utils/constants'

Enzyme.configure({ adapter: new Adapter() })

describe('#CryptoDetails', () => {

    it('should render the presenter properly', () => {
        const component = renderer.create(<CryptoCard />).toJSON();

        expect(component).toMatchSnapshot();
    })
    it('should render the the index', () => {
        const component = renderer.create(<CryptoCard />).toJSON();

        expect(component).toMatchSnapshot();
    })
})

describe('#CryptoCardComponent', () => {
    let props;

    beforeEach(() => {

        const mockPercent1hColor = jest.fn();
        const mockPercent24hColor = jest.fn();
        const mockPercent7dColor = jest.fn();
        props = {
            screenProps: {
                theme: themes.dark,
            },
            crypto: { priceUsd: 232 },
            _percent1hColor: mockPercent1hColor,
            _percent24hColor: mockPercent24hColor,
            _percent7dColor: mockPercent7dColor,
            
        }


    })

    it('should render cryptocardComponent', () => {
        
        const mockOnRefresh = jest.fn();
        const component = renderer.create(<CryptoCardComponent _onRefresh={mockOnRefresh} {...props} />).toJSON();

        expect(component).toMatchSnapshot();
    })

    it('should check if onRefresh is called', () => {
        //arrange
        const mockOnRefresh = jest.fn();        
        const cryptoComponent = shallow(<CryptoCardComponent _onRefresh={mockOnRefresh} {...props} />);
        const instance = cryptoComponent.instance();
        //act
        instance._onRefresh();
        //assert
        expect(mockOnRefresh).toHaveBeenCalled();
        expect(mockOnRefresh).toHaveBeenCalledTimes(1);

    })

});
