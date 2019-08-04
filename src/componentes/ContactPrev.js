import React, { Component } from 'react';

export default class contactPrev extends Component {

goToUser=()=> { 
    this.props.goToUser(this.props.contact)
}

goToUserEdit=()=> { 
    this.props.goToUserEdit(this.props.contact)
}

deleteContact=()=> { 
    this.props.deleteContact(this.props.contact)
}

    render() {
        return (
            <li className="contact" >
                {this.props.contact.name}
                <button onClick={this.goToUserEdit}>Edit</button>
                <button onClick={this.deleteContact}>Delete</button>
                <button onClick={this.goToUser}>Details</button>
            </li>
        )

    }

}