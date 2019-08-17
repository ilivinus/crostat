import { CryptoService } from '../../services/cryptocurrency-ervice';
import { API_KEY } from '../../utils/config';
import { API } from '../../services/apis';
import { getListing, getListingError, requestListing } from './actionables';



export function fetchLatestListing(currency ="USD",start = 1, limit = 50){
    return dispatch =>{
       const service =  new CryptoService({ api : API, apiKey : API_KEY, fetch : fetch});
       dispatch(requestListing)
       service.getLatestListing(currency,start,limit).then(data =>{
           dispatch(getListing(data));
       }).catch(err =>{
           dispatch(getListingError(err));
       })
    }
}