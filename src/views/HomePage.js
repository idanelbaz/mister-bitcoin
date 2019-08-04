import React, { Component } from 'react';
import UserService from '../services/UserService'
import BitcoinService from '../services/BitcoinService'

export default class homePage extends Component {

    state = { user: null, bitcoin: 0 }

    async componentDidMount() {
        const user = await UserService.getUser();
        this.setState({ user: user })
        const bitcoin = await BitcoinService.getRate(); 
        this.setState({bitcoin : bitcoin})
    }

    render() {

        const { user, bitcoin } = this.state;
        return (
            <div className="home-page">
                {user &&
                    <div>
                        <h2>Hello {user.name} !</h2>
                        <h2> 💰 Coins: {user.coins}</h2>
                        <h2>Rate from USD: {bitcoin}</h2>
                    </div>
                }

            </div>
        )

    }

}