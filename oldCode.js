// const prices = async (date) => {
// const cp = require('coinpaprika-js');
// return await cp.historical("btc-bitcoin", date, { interval: "1d", limit: 4000 });
// }
// prices("2020-07-12").then((value) => console.log(value))
const ticker = require('../tickerRequests.js')
        var request = new ticker.api()
        request.setCoin('ltc-litecoin')
        var data = request.prices()
            .then((data) => { 
                console.log(data)
                options = {
                    title: {
                        text: 'Coin Candle Chart'
                    },
                
                    rangeSelector: {
                        selected: 1
                    },
                    series: [
                        {
                            type: 'candlestick',
                            name: "LTC",
                            data: data, 
                            
                        }]
                    };
            } )
            var ticker = require('./tickerRequests.js')
            var p = new ticker.api();
            p.setCoin("link-chainlink")
            p.prices('').then((result) => console.log(result));
            p.setCoin('ltc-litecoin')

    // move outside this module
    gains(data, dates){

        const testDates = [
            {date : '2014-01-19', price: 200},
            {date : '2014-01-22', price: 200},
            {date : '2021-01-17', price: 5000},
            {date : '2021-02-16', price: 50000}
        ]
        const testData = [
            {type: 'buy', amount: 1, date: '2014-01-19'},
            {type: 'buy', amount: 0.33, date: '2021-01-17'},
            {type: 'sell', amount: 0.4, date: '2021-02-15'}
        ]

        var totalBuys = testData.filter(a => a.type === 'buy')
                            .map(a => a.amount * testDates.find(b => b.date === a.date).price)
                            .reduce((a,b) => a + b)

        var totalSells = testData.filter(a => a.type === 'sell')
                            .map(a => a.amount * testDates.find(b => b.date === a.date).price)
                            .reduce((a,b) => a + b)
        
        var coinRemaining = 0
        for (let trade of testData){
            if (trade.type === 'buy')   
                coinRemaining += trade.amount
            if (trade.type === 'sell')
                coinRemaining -= trade.amount
        }
        console.log(coinRemaining)
        const profit = totalSells - totalBuys
        return profit
    }