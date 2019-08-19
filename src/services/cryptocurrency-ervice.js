import { API } from './apis'
import  { API_KEY } from '../utils/config'
import info from '../utils/constants/latest';
import { Alert } from 'react-native';

export  class CryptoService{
    constructor({ apiKey, api, fetch }){
        this.API = api;
        this.API_KEY = apiKey;
        this.fetch = fetch;
    }
    getLatestListing(currency,start, limit){
        // return new Promise((resolve,reject) =>{
        //     try{
        //         resolve([...info.data].slice(start,start + limit));                
        //     }catch(err){
        //         reject(err)
        //     }
        // })
        return fetch(API.cryptoCurrencyListingsLatest(currency,start,limit),{
            method: 'GET',
            headers:{
                [API_KEY.key_name] : API_KEY.value
            }
         })
        .then(res => res.json())
        .then(result => result.data)
        .catch(err => Alert.alert('Opps, something went wrong'));
    }
}