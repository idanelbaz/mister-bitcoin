import React, { Component } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import BitcoinService from '../services/BitcoinService'

export default class StatisticPage extends Component {

    state = { data: null, transPerDay: null }

    async componentDidMount() {
        const data = await BitcoinService.getMarketPrice()
        this.setState({ data: data })
        const transPerDay = await BitcoinService.getConfirmedTransactions()
        this.setState({ transPerDay: transPerDay })
    }

    render() {

        const { data, transPerDay } = this.state;
        return (
            <div className="charts">
                <h2>Market Price (USD) </h2>
                {
                    data &&
                    <Sparklines data={data}>
                        <SparklinesLine color="blue" />
                    </Sparklines>
                }
                <h3>Average USD market price across major bitcoin exchanges</h3>
                <hr></hr>
                <h2>Confirmed Transactions Per Day</h2>
                {
                    transPerDay &&
                    <Sparklines data={transPerDay}>
                        <SparklinesLine color="red" />
                    </Sparklines>
                }
                <h3>The number of daily confirmed Bitcoin transactions</h3>
            </div>
        )

    }

}