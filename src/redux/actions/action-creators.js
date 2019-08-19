import { CryptoService } from '../../services/cryptocurrency-ervice';
import { API_KEY } from '../../utils/config';
import { API } from '../../services/apis';
import { getListing, getListingError, requestListing, setConversion } from './actionables';



export function fetchLatestListing(start = 1, limit = 50, currency) {
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
export function loadMore(start = 1, limit = 50, currency) {
    return (dispatch, getState) => {
        currency = currency ? currency : getState().setting.conversion;
        let data = getState().listings.data;
        let start = parseInt(((data || []).length / limit));
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