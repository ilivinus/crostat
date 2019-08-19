export const API = {
    cryptoCurrencyListingsLatest : (conversion,start,limit) => `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=${start}&limit=${limit}&convert=${conversion}`
}