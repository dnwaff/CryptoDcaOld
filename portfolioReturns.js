
class returns {
    //buy_sell_dt = {type: 'buy', date : '2014-01-19', price: 200}

    static transactions(startDate, endDate, buyPrice, period= 'month'){
        var result = []
        var dateAcc = new Date(startDate);
        var ed = new Date(endDate)
        // todo: add period 
        while( dateAcc < ed){
            result.push({date: dateAcc.toISOString(), price: buyPrice})
            dateAcc.setMonth(dateAcc.getMonth() + 1)
        }
        return result
    }

    static portfolio (transactions, tickerHistory){
        var portfolio = []
        for (var i in tickerHistory){
            for (var j in transactions){
                if ( new Date(transactions[j].date).toDateString() == 
                     new Date(tickerHistory[i].timestamp).toDateString()){
                    var cost = tickerHistory[i].price
                    transactions[j].amount = transactions[j].price/cost
                    transactions[j].cost = cost
                    portfolio.push(transactions[j])
                }
            }
        }
        return portfolio
    }

    static portfolioInfo(portfolio){
        var result = {}
        result.avgPrice = this.avgPrice(portfolio)
        result.percentGains = this.percentGains(portfolio)
        result.totalAmountPaid = this.totalAmountPaid(portfolio)
        result.totalValuation = this.totalValuation(portfolio)
        result.totalCoins = this.totalCoins(portfolio)
        return result
    }

    static avgPrice(portfolio){
        var totalAmount = this.totalAmountPaid(portfolio)
        var result = portfolio.map(a => (a.cost)*(a.price)/totalAmount)
                .reduce((a,b) => a + b)
        return result
    }
    
    static percentGains(portfolio){
        var amountPaid = this.totalAmountPaid(portfolio)
        var gains = this.totalValuation(portfolio)
        return 100 * (gains-amountPaid)/amountPaid
    }

    static totalAmountPaid(portfolio){
        var result = portfolio.map(a => a.price)
                .reduce((a,b) => a + b)
        return result
    }

    static totalValuation(portfolio){
        var totalCoins = this.totalCoins(portfolio)
        portfolio.sort((a, b) => (new Date(a.date) > new Date(b.date)) ? 1 : -1 )
        var lastPrice = portfolio[portfolio.length - 1].cost
        var result = lastPrice * totalCoins
        return result
    }

    static totalCoins(portfolio){
        var result = portfolio.map(a => a.amount)
                    .reduce((a, b) => a + b)
        return result
    }


}
export {returns};