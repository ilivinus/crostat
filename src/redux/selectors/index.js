import Moment from 'moment';

export const getQuotesListing = (state) => {
    let result = Object.values(state.quotes).map(m => ({
        name: m.name,
        id: m.id.toString(),
        percentChange1h: m.percent_change_1h,
        percentChange7d: m.percent_change_7d,
        percentChange24h: m.percent_change_24h,
        priceUsd: m.price,
        symbol: m.symbol,
        volume24h: m.volume_24h,
        lastUpdate: Moment(m.last_updated).format('LTS'),
        total: m.total_supply,
        maxSupply: m.max_supply
    }));
    return result;
}

export const getListingDetails = (state, cryptoId) =>{
    const currency = state.setting.conversion;

    const result = Object.values(state.listings.data).
    filter(m => m.id == cryptoId).map(m => ({
        name : m.name,
        rank : m.cmc_rank,
        marketPairs : m.num_market_pairs,
        dateAdded : Moment(m.date_added).format('LLL'),
        lastUpdated : Moment(m.last_updated).format('LTS'),
        mineable : m.tags && m.tags.length > 0 ? true : false, 
        totalSuply: m.total_supply,
        maxSupply : m.max_supply,
        circulatingSupply : m.circulating_supply,
        marketCapUsd : m.quote[currency].market_cap,
        volume24h: m.quote[currency].volume_24h ,
        priceUsd: m.quote[currency].price,       
        percentChange1h: m.quote[currency].percent_change_1h,
        percentChange24h: m.quote[currency].percent_change_24h,
        percentChange7d: m.quote[currency].percent_change_7d
    }));
    return result[0];
}

export const isListingLoading = state => state.listings.loading;

export const conversionCurrency = state => state.setting.conversion;