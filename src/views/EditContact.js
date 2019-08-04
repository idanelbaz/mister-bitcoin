import React, { Component } from 'react';
import contactService from '../services/ContactService';
import { Link } from 'react-router-dom';

export default class contactDetails extends Component {
    state = {
        contact: {
            name: '', phone: '', email: ''
        },

    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        if (id) {
            const contact = await contactService.getContactById(id)
            this.setState({ contact: contact });
        }
    }

    handleChange = e => {
      const {value,name}  = e.target;
        this.setState((state)=>({ contact: { ...state.contact, [name]: value } }));
    };

    handleSubmit = async e => {
        e.preventDefault();
        await contactService.saveContact(this.state.contact);
        const { history } = this.props;
        history.push('/');
    };

    deleteContact = ()=> { 
        contactService.deleteContact(this.state.contact._id)
        const { history } = this.props;
        history.push('/');
    }


    render() {
        const { contact } = this.state;
        return (
            (<div className="contact-edit">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                        value={contact.name}
                    />
                    <input
                        type="text"
                        name="phone"
                        onChange={this.handleChange}
                        value={contact.phone}
                    />
                    <input
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                        value={contact.email}
                    />
                    <button>Save</button>
                </form>
                <Link to="/contacts">
                    <button>Back</button>
                </Link>
                {
                     contact._id && ( <button onClick={this.deleteContact}>Delete</button>)
                }
               
               
            </div>)
        )
    }
}