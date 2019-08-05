import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBitcoinRate } from '../store/actions/bitcoinActions';
import { getUser } from '../store/actions/userActions';

class homePage extends Component {

    async componentDidMount() {
        const { dispatch } = this.props
        await dispatch(getUser())
        if (this.props.user === null) {
            const { history } = this.props;
            history.push('/signup');
        }
        else {
            dispatch(getBitcoinRate())
        }

    }

    render() {

        const { bitcoin, user } = this.props;
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

const mapStateToProps = ({ bitcoinReducer, userReducer }) => {
    const { bitcoin } = bitcoinReducer;
    const { user } = userReducer;

    return {
        bitcoin,
        user
    }
}

export default connect(mapStateToProps)(homePage)