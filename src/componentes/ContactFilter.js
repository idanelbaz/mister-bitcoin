import React, { Component } from 'react';



export default class contactFilter extends Component {

    render() {
        return (
            <section className="contacts-filter">
             <input type="text" placeholder="Search users" 
                value={this.props.filterBy} 
                onChange={this.props.handleChangeTxt}>
            </input>
            </section>

        )

    }

}