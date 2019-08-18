import { LATEST_LISTING_SUCCESS } from '../actions/action-types';


const initialState = {    
}


export default function(state = initialState, action){
    switch(action.type){
        case LATEST_LISTING_SUCCESS:
            const quotes  = action.payload.map(m => {                
                let conversionCurrency = Object.keys(m.quote)[0];
                return ({[m.symbol] : { 
                    id : m.id,
                    name : m.name,
                    symbol : m.symbol,
                    cir_supply : m.circulating_supply, 
                    total_supply : m.total_supply, 
                    max_supply : m.max_supply, 
                    conversion : conversionCurrency, 
                    ...m.quote[conversionCurrency]}});
            }).reduce((prev,curr) =>({...prev,...curr }));

            return {
                ...state,
                ...quotes
            };               
        default:
            return state;
    }
}