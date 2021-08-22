import { ticker } from 'coinpaprika-js';

class api {
    //buy_sell_dt = {type: 'buy', date : '2014-01-19', price: 200}
    constructor(){
        this.cp = require('coinpaprika-js');
        this.coins = {}
    }

    async __prices(startDate, endDate = false){
        return await this.cp.historical(this.coin, startDate, { end: endDate, interval: "1d", limit: 5000 })
     }

     async __pricesCandles(startDate, endDate = false){
        var result = []
        var dateAcc = new Date(startDate);
        var ed = new Date(endDate)
        while( dateAcc < ed){
            result = result.concat(await this.cp.candles(this.coin, dateAcc.toISOString(), {end: endDate}))
            dateAcc.setFullYear(dateAcc.getFullYear() + 1)
        }
        result = result.map(a => [a.open, a.high, a.low, a.close])
        return result
     }
     
     async raw_prices(transactions){
        //Todo validate array
        transactions.sort((a, b) => (new Date(a.date) > new Date(b.date)) ? 1 : -1 )
        var dates = transactions.map(a => a.date)
        const startDate = dates[0]
        const endDate = dates[transactions.length - 1]
        console.log(startDate + " : " + endDate)
        return this.__prices(startDate, endDate)
     }

     async prices(transactions){
        var raw = await this.raw_prices(transactions)
        return raw.map(a => a.price)
    }

    async getCoins(){
        var coinObj = await this.cp.coins();
        const activeCoins = coinObj
            .filter(a => a.is_active)
            .map(a => a.id)
        
         activeCoins.forEach(tickerId => {
            var coinId = tickerId.split('-')[0]
            var name = tickerId.split('-')[1]
            this.coins[coinId] = {name: name, tickerId: tickerId}
        });

        return activeCoins.slice(0,100);
    }

    setCoin(coin){
        this.coin = coin;
    }
}
export {api};