import { CryptoService } from '../../services/cryptocurrency-ervice';
import { API_KEY } from '../../utils/config';
import { API } from '../../services/apis';
import { getListing, getListingError, requestListing, setConversion, conversionChange } from './actionables';
import { PAGE_SIZE } from '../../utils/constants';




export function fetchLatestListing(start = 1, limit = PAGE_SIZE, currency) {
    return (dispatch, getState) => {
        currency = currency ? currency : getState().setting.conversion;
        const service = new CryptoService({ api: API, apiKey: API_KEY, fetch: fetch });
        dispatch(requestListing)        
        service.getLatestListing(currency, start, limit).then(data => {
            dispatch(setConversion(currency));
            dispatch(getListing(data));

        }).catch(err => {
            dispatch(getListingError(err));
        })

    }
}
export function fetchDataOnConversionChange(start = 1, limit = PAGE_SIZE, currency) {
    return (dispatch, getState) => {
        currency = currency ? currency : getState().setting.conversion;
        const service = new CryptoService({ api: API, apiKey: API_KEY, fetch: fetch });
        dispatch(requestListing)        
        service.getLatestListing(currency, start, limit).then(data => {
            dispatch(setConversion(currency));
            dispatch(conversionChange(data));
        }).catch(err => {
            dispatch(getListingError(err));
        })

    }
}
export function loadMore(start = 1, limit = PAGE_SIZE, currency) {
    return (dispatch, getState) => {
        currency = currency ? currency : getState().setting.conversion;
        let data = Object.keys(getState().listings.data);
        start = (data || []).length;
        const service = new CryptoService({ api: API, apiKey: API_KEY, fetch: fetch });
        dispatch(requestListing)
        service.getLatestListing(currency, start, limit).then(data => {
            dispatch(setConversion(currency));
            dispatch(getListing(data));
        }).catch(err => {
            dispatch(getListingError(err));
        })
    }
}