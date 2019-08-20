import { CryptoService } from '../cryptocurrency-service';
import { API_KEY } from '../../utils/config'
import { API } from '../apis';

describe('#CryptoService',()=>{
    // function fetch(url, { method, headers }){
    //     return new Promise((resolve,reject) =>{
    //         if(/(start|limit|convert)/.test(url)){
    //             reject("invalid url");
    //         }
    //         if(method == 'GET'){
    //             reject('invalid method');
    //         }
    //         if(typeof headers !== 'object'){
    //             reject('invalid header');
    //         }
    //         if(Object.keys(headers)[0] !== API_KEY.key_name){
    //             reject('invalid key');
    //         }
    //         function json(){
    //             return new Promise((res,rej)=>{
    //                 res("hello world");                    
    //             })
    //         }
    //         return resolve(json);
    //     })
    // }
    // it('should return result of length 20 if successful',async () => {
    //     const expectedResult = 20;
    //     const cryptoService = new CryptoService({ apiKey : API_KEY, api : API, fetch : fetch});
    //     let actualResult = await cryptoService.getLatestListing("BTC",1,20)
    //     expect(actualResult.length).toBe(expectedResult);
    // })
    it('placeholder', () =>{
        
    })
})