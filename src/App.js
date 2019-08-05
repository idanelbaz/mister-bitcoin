import React, { Component } from 'react';
import ContactList from '../src/views/ContactList';
import HomePage from './views/HomePage';
import Header from './componentes/header';
import StatisticPage from './views/StatisticPage';
import ContactDetails from './views/ContactDetails';
import EditContact from './views/EditContact';
import SignUp from './views/SignUp';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';


import './App.css';

class App extends Component {
    state = { page: 'homePage' }

    goToPage = (page) => {
        this.setState({ page: page })
    }

    render() {
        return (
            <div className="App">

                <Router>
                    <Header></Header>
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/signup" exact component={SignUp} />
                        <Route path="/statistic" component={StatisticPage} />
                        <Route path="/contacts" component={ContactList} />
                        <Route path="/add" component={EditContact} />
                        <Route path="/contact/:id" render={props => {
                            return <ContactDetails {...props} />;
                        }}
                        />
                        <Route path="/edit/:id" render={props => {
                            return <EditContact {...props} />;
                        }}
                        />
                    </Switch>
                </Router>
            </div>
        )

    }

}

export default App;