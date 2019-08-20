import React from 'react'
import Loading from '../Loading';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    color : '#fff',
    size : 23,
  }

  const enzymeWrapper = shallow(<Loading {...props} />)

  return {
    props,
    enzymeWrapper
  }
}
describe('#common components test',()=>{

    it('should',()=>{
        const {  enzymeWrapper, props } = setup();
        //expect(enzymeWrapper.find('ActivityIndicator'))
    })
    it('should render properly if passed nothing',()=>{
        const component = renderer.create(<Loading />).toJSON();

        expect(component).toMatchSnapshot();
    })
    it('should render white if pass color', () =>{
        const component = renderer.create(<Loading />).toJSON();

        expect(component).toMatchSnapshot();
    })

    it('should render large if pass size  large',()=>{
        const component = renderer.create(<Loading size='large'/>).toJSON();
        expect(component).toMatchSnapshot();
    })
})