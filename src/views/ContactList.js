import React, { Component } from 'react';
import ContactFilter from '../componentes/ContactFilter';
import ContactPrev from '../componentes/ContactPrev';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getContacts } from '../store/actions/contactsActions'
import { deleteContact } from '../store/actions/contactsActions'





 class contactList extends Component {

    state = {filterBy: { term: '' } }

    async componentDidMount() {
        const { dispatch } = this.props
        dispatch(getContacts()) 
    }

    handleChangeTxt = async (event) => {
        this.setState({ filterBy: { term: event.target.value } }, async () => {
            const { dispatch } = this.props
            dispatch(getContacts(this.state.filterBy)) 
        });

    }

    goToUser = (currContact) => {
        this.props.history.push(`/contact/${currContact._id}`);
    }

    goToUserEdit =(currContact) => { 
        this.props.history.push(`/edit/${currContact._id}`);
    }

    deleteContact =async (currContact) => { 
        const { dispatch } = this.props
        dispatch(deleteContact(currContact._id))
    }




    render() {
        const {filterBy } = this.state;
        const {contacts} = this.props

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

const mapStateToProps = ({contactsReducer}) => { 
    const { contacts } = contactsReducer;
  
    return {
     contacts
    }
  }
  
  export default connect(mapStateToProps)(contactList)

