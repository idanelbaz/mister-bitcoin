import React, { Component } from 'react';
import contactService from '../services/ContactService';
import { Link } from 'react-router-dom';

export default class contactDetails extends Component {
    state = {
        contact: null
    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        const contact = await contactService.getContactById(id)
        this.setState({ contact: contact });
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