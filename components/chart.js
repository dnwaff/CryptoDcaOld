import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { coin } from 'coinpaprika-js'
import { makeStyles } from '@material-ui/core/styles';
import MainCard from '@material-ui/core/Card';
import '../App.css';
import { CardHeader, CardActionArea, CardContent  } from '@material-ui/core';
var pfr = require('../portfolioReturns.js')
var ticker = require('../tickerRequests.js')


class Chart extends React.Component{
    state = {
        options: ''
    }

    async componentDidMount(){
        var p = new ticker.api();
        await p.getCoins()
        p.setCoin(p.coins['ltc'].tickerId)
        var transactions = await pfr.returns.transactions('2020-01-19', '2021-02-19', 1000)
        var tickerHistory = await p.raw_prices(transactions)
        var portfolio = pfr.returns.portfolio(transactions, tickerHistory)
        console.log(pfr.returns.portfolioInfo(portfolio))
        p.prices(transactions)
            .then((data) => { 
                const options = {
                    
                    title: {
                        text: 'Coin Candle Chart'
                    },
                    rangeSelector: {
                        selected: 1
                    },
                    series: [
                        {
                            //turboThreshold: 4000,
                            //type: 'candlestick',
                            name: "Cardano",
                            data: data, 
                            // dataGrouping: {
                            //     units: [
                            //         [
                            //             'day', // unit name
                            //             [1] // allowed multiples
                            //         ], [
                            //             'month',
                            //             [1, 2, 3, 4, 6]
                            //         ]
                            //     ]
                            // }
                    }]
                };
                this.setState({options: options})
                console.log(data)
            } )
            
        }
    render(){
        return(
            <div className={"card-padding"}>
                <MainCard>
                    <CardContent>
                            <HighchartsReact highcharts={Highcharts} 
                                            constructorType={"stockChart"} 
                                            options={this.state.options} />
                    </CardContent>
                </MainCard>
            </div>
        )
    }
}

export default Chart;