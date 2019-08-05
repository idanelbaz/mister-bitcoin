import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getContactById } from '../store/actions/contactsActions';

class contactDetails extends Component {
    state = {
        contact: null
    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        const { dispatch } = this.props
        await dispatch(getContactById(id))
        this.setState({ contact: this.props.contact })
    }


    render() {
        const { contact } = this.state;
        return (
            contact &&
            <div className="contact-details">
                <h3>Name: {contact.name}</h3>
                <h3>Phone: {contact.phone}</h3>
                <h3>Email: {contact.email}</h3>
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

const mapStateToProps = ({ contactsReducer }) => {
    const { contact } = contactsReducer;

    return {
        contact
    }
}

export default connect(mapStateToProps)(contactDetails)