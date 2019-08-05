import React, { Component } from 'react';


export default class moveList extends Component {

    render() {
        const { user, contact } = this.props;
        return (
            <div className="transferFund" >
                <h2>Your moves: </h2>
                {
                    user.move.map(move => {
                        if (move.toId === contact._id) {
                            return <div key={move.at}>
                                <h3>At: {move.at}</h3>
                                <h3>Amount: {move.amount} coins</h3>
                            </div>
                        }
                        else return null;

                    })}
            </div>
        )
    }
}

