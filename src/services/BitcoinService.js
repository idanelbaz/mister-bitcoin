
const axios = require('axios')

export default {
    getRate,
    getMarketPrice,
    getConfirmedTransactions,
}

async function getRate() {
    var prmRes = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=1`)
    try {
        return prmRes.data;
    }
    catch (err) {
        console.log(err)
    }
}

async function getMarketPrice() {
    var prmRes = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`)
    try {
        var dataToReturn = prmRes.data.values.map(data => {
            return data.y;
        })
        return dataToReturn;
    }
    catch (err) {
        console.log(err)
    }
}

async function getConfirmedTransactions() {
    var prmRes = await axios.get(`https://api.blockchain.info/charts/n-transactions?timespan=5months&format=json&cors=true`)
    try {
        var dataToReturn = prmRes.data.values.map(data => {
            return data.y;
        })
        return dataToReturn;
    }
    catch (err) {
        console.log(err)
    }
}