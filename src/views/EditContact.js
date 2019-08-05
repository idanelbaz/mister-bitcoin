import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getContactById } from '../store/actions/contactsActions';
import { deleteContact } from '../store/actions/contactsActions';
import { editContact } from '../store/actions/contactsActions';



class editContactDetails extends Component {
    state = {
        contact: {
            name: '', phone: '', email: ''
        },
    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        if (id) {
            const { dispatch } = this.props
            await dispatch(getContactById(id))
            this.setState({ contact: this.props.contact })
        }
    }

    handleChange = e => {
        const { value, name } = e.target;
        this.setState((state) => ({ contact: { ...state.contact, [name]: value } }));
    };

    handleSubmit = async e => {
        e.preventDefault();
        const { dispatch } = this.props
        await dispatch(editContact(this.state.contact))
        const { history } = this.props;
        history.push('/');
    };

    deleteContact = () => {
        const { dispatch } = this.props
        dispatch(deleteContact(this.state.contact._id))
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
                    contact._id && (<button onClick={this.deleteContact}>Delete</button>)
                }


            </div>)
        )
    }
}

const mapStateToProps = ({ contactsReducer }) => {
    const { contact } = contactsReducer;

    return {
        contact
    }
}

export default connect(mapStateToProps)(editContactDetails)