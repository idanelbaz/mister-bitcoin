import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class header extends Component {

    state = { home: 'homePage', contacts: 'contacts', charts: 'charts' }

    goPage(page) {
        this.props.goToPage(page)
    }

    render() {
        return (
            <div className="header">
                {/* <ul style={{ listStyle: 'none' }}> */}
                    <NavLink exact to="/">
                        <li>Home</li>
                    </NavLink>
                    <NavLink exact to="/statistic">
                        <li>Statistic</li>
                    </NavLink>
                    <NavLink exact to="/contacts">
                        <li>Contacts</li>
                    </NavLink>
                {/* </ul> */}
            </div>
        )

    }

}