import settingReducer from '../reducers/settings-reducer';
import quotesReducer from '../reducers/quote-reducer';
import { themes } from '../../utils/constants'
import { toggleTheme, setConversion } from '../actions/actionables';

describe('#settings-reducer',() => {
    it('should return the initial state',()=>{
        const expectedResult = {
            darkTheme: true,
            theme: themes.dark,
            conversion: "USD",
            conversionList: ["USD", "BTC"]
        }
        expect(settingReducer(undefined,{})).toEqual(expectedResult);
        
    })
    it('should toggle the initial state darkTheme value',()=>{
        const expectedResult = {
            darkTheme: false,
            theme: themes.light,
            conversion: "USD",
            conversionList: ["USD", "BTC"]
        }
        expect(settingReducer(undefined,toggleTheme())).toEqual(expectedResult);
    })

    it('should change the conversion currency and retain other state attributes',()=>{
        const expectedResult = {
            darkTheme: true,
            theme: themes.dark,
            conversion: "BTC",
            conversionList: ["USD", "BTC"]
        }
        expect(settingReducer(undefined,setConversion("BTC"))).toEqual(expectedResult);
    })

})

describe('#quotes-reducer',()=>{

    it('should return the initial state',()=>{
        const expectedResult = {}
        expect(quotesReducer(undefined,{})).toEqual(expectedResult);
    })
    
})