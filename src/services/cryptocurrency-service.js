import { API } from './apis'
import { API_KEY } from '../utils/config'

export class CryptoService {
    constructor({ apiKey, api, fetch }) {
        this.API = api;
        this.API_KEY = apiKey;
        this.fetch = fetch;
    }

    getLatestListing(currency, start, limit) {

        return fetch(API.cryptoCurrencyListingsLatest(currency, start, limit), {
            method: 'GET',
            headers: {
                [API_KEY.key_name]: API_KEY.value
            }
        })
            .then(res => res.json())
            .then(result => result.data)
            .catch(err => err.message);
    }
}