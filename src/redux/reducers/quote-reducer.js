import { LATEST_LISTING_SUCCESS } from '../actions/action-types';


const initialState = {
    ["USD"]: {
        "price": 309.984395729,
        "volume_24h": 1689128771.85275,
        "percent_change_1h": -0.269082,
        "percent_change_24h": 1.3477,
        "percent_change_7d": -2.44845,
        "market_cap": 5564394269.558148,
        "last_updated": "2019-08-16T14:16:06.000Z"
    }
}


export default function(state = initialState, action){
    switch(action.type){
        case LATEST_LISTING_SUCCESS:
            const quotes  = action.payload.map(m => {                
                let conversionCurrency = Object.keys(m.quote)[0];
                return ({[m.symbol] : { conversion : conversionCurrency, ...m.quote[conversionCurrency]}});
            }).reduce((prev,curr) =>({...prev,...curr }));

            return {
                ...state,
                ...quotes
            };               
        default:
            return state;
    }
}