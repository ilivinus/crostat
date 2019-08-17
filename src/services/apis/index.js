export const API = {
    cryptoCurrencyListingsLatest : (conversion,start,limit) => `https://coinmarketcap.com/api/documentation/v1/#operation/getV1CryptocurrencyListingsLatest?start=${start}&limit=${limit}&convert=${conversion}`
}