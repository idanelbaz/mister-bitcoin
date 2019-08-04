import React, { Component } from 'react';
import contactService from '../services/ContactService';
import ContactFilter from '../componentes/ContactFilter';
import ContactPrev from '../componentes/ContactPrev';
import { NavLink } from 'react-router-dom';





export default class contactList extends Component {

    state = { contacts: [], filterBy: { term: '' } }

    async componentDidMount() {
        const contacts = await contactService.getContacts();
        this.setState({ contacts })
    }

    handleChangeTxt = async (event) => {
        this.setState({ filterBy: { term: event.target.value } }, async () => {
            const filteredContacts = await contactService.getContacts(this.state.filterBy);
            this.setState((state) => { return { contacts: filteredContacts } })
        });

    }

    goToUser = (currContact) => {
        this.props.history.push(`/contact/${currContact._id}`);
    }

    goToUserEdit =(currContact) => { 
        this.props.history.push(`/edit/${currContact._id}`);
    }

    deleteContact =async (currContact) => { 
      const contacts =  await contactService.deleteContact(currContact._id) 
      this.setState((state) => { return { contacts: contacts } })
    }




    render() {
        const { contacts, filterBy } = this.state;

        return (
            <section className="contacts-list">
                <ContactFilter handleChangeTxt={this.handleChangeTxt} filterBy={filterBy.term}></ContactFilter>
                <NavLink exact to="/add">
                        <li>Add Contact</li>
                    </NavLink>
                <ul className="contact-containar">
                    {
                        contacts.map(contact =>
                            <ContactPrev deleteContact={this.deleteContact} goToUserEdit={this.goToUserEdit} goToUser={this.goToUser} contact={contact} key={contact._id}></ContactPrev>
                        )}
                </ul> 
            </section>

        )

    }

}

