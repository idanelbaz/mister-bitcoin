import React, { Component } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { connect } from 'react-redux';
import { getTransByDay } from '../store/actions/bitcoinActions';
import { getMarketPrice } from '../store/actions/bitcoinActions';

class StatisticPage extends Component {

    state = {}

    async componentDidMount() {
        const { dispatch } = this.props
         dispatch(getMarketPrice())
         dispatch(getTransByDay())
    }

    render() {

        const { transPerDay, marketPrice } = this.props;
        return (
            <div className="charts">
                <h2>Market Price (USD) </h2>
                {
                    marketPrice &&
                    <Sparklines data={marketPrice}>
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

const mapStateToProps = ({ bitcoinReducer }) => {
    const { transPerDay, marketPrice } = bitcoinReducer;

    return {
        transPerDay,
        marketPrice
    }
}

export default connect(mapStateToProps)(StatisticPage)