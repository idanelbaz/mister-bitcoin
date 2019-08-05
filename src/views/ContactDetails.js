import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getContactById } from '../store/actions/contactsActions';
import TransferFund from '../componentes/TransferFund';
import { transferCoins } from '../store/actions/userActions';
import MoveList from '../componentes/MovesList';
import { getUser } from '../store/actions/userActions';



class contactDetails extends Component {
    state = {
        contact: null,
        user: null
    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        const { dispatch } = this.props
        await dispatch(getContactById(id))
        this.setState({ contact: this.props.contact })
        await dispatch(getUser())
    }

    transferCoins = async (coinsToTransfer) => {
        const { dispatch } = this.props
        await dispatch(transferCoins(coinsToTransfer, this.state.contact))
        const { history } = this.props;
        history.push('/');
    }


    render() {
        const { contact } = this.state;
        const { user } = this.props;
        return (
            contact &&
            <div className="contact-details">
                <h3>Name: {contact.name}</h3>
                <h3>Phone: {contact.phone}</h3>
                <h3>Email: {contact.email}</h3>

                <TransferFund transferCoins={this.transferCoins} contact={contact}></TransferFund>
                <br></br>
                <MoveList user={user} contact={contact}></MoveList>
                <Link to="/contacts">
                    <button>Back</button>
                </Link>
                <Link to={`/edit/${contact._id}`}>
                    <button>Edit</button>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = ({ contactsReducer, userReducer }) => {
    const { contact } = contactsReducer;
    const { user } = userReducer
    return {
        contact,
        user
    }
}

export default connect(mapStateToProps)(contactDetails)