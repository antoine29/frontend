import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import TicketListPage from './pages/ticket-list-page';
import TicketFormPage from './pages/ticket-form-page';
import LoginFormPage from './pages/login-form-page';

import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <div className="ui three item menu">
          <NavLink className="item" activeClassName="active" exact to="/">
            Ticket list
          </NavLink>
          <NavLink className="item" activeClassName="active" exact to="/tickets/new">
            Add ticket
          </NavLink>
          <NavLink className="item" activeClassName="active" exact to="/login">
            LogIn
          </NavLink>
        </div>

        <Route exact path="/" component={TicketListPage} />
        <Route exact path="/tickets/new" component={TicketFormPage} />
        <Route exact path="/tickets/edit/:_id" component={TicketFormPage} />
        <Route exact path="/login" component={LoginFormPage} />
      </Container>
    );
  }
}

export default App;