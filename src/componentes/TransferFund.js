import React, { Component } from 'react';


export default class transferFund extends Component {
    state = {
        coinsToTranfer: 0,
    };

    handleChange = e => {
        const coinsToTranfer = e.target.value;
        this.setState({coinsToTranfer});
    };

    transferCoins =()=> { 
        this.props.transferCoins(this.state.coinsToTranfer)
    }

    render() {
        const {contact} = this.props;
        return (
            <div className="transferFund" >
                <h2>Transfer coins to {contact.name}</h2>
                <h2>Amount:  <form onSubmit={this.transferCoins}>
                    <input
                        type="number"
                        onChange={this.handleChange}
                        max="100"
                    />
                    <button>Transfer</button>
                </form>
                </h2>

            </div>
        )
    }
}