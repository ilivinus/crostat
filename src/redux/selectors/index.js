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
            lastUpdate: m.last_updated,
            total: m.total_supply,
            maxSupply: m.max_supply
        }));
    return result;
}