import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../store/actions/userActions';



class signup extends Component {

    state = { user: '' }

    async componentDidMount() {

    }

    handleChange = e => {
        const user = e.target.value;
        this.setState({user});
    };

    handleSubmit = async e => {
        e.preventDefault();
        const { dispatch } = this.props
        await dispatch(signUp(this.state.user))
        const { history } = this.props;
        history.push('/');
    };
    render() {

        return (
            <div className="signup">
                <h2>Sign Up</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        onChange={this.handleChange}
                    />
                    <button>Sign</button>
                </form>

            </div>
        )
    }
}

const mapStateToProps = ({ userReducer }) => {
    const { user } = userReducer;

    return {
        user
    }
}

export default connect(mapStateToProps)(signup)