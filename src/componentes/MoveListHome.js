import React, { Component } from 'react';


export default class moveList extends Component {

    render() {
        const { user } = this.props;
        var counter = 0;
        return (
            <div className="transferFund" >
                <h2>Your last 3 moves:  </h2>
                {
                    user.move.map(move => {
                        counter++;
                        if (counter >= 3) {
                            return <div key={move.at}>
                                <h3>To: {move.to}</h3>
                                <h3>At: {move.at}</h3>
                                <h3>Amount: {move.amount} coins</h3>
                            </div>
                        }
                    })}
            </div>
        )
    }
}
