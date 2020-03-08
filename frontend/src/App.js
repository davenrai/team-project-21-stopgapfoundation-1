import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import './App.css';
import Login from './react-components/Login';
import Dashboard from './react-components/Dashboard';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
      user: {
        isAdmin: true
        // login: () => this.setState(user:)
      }
    };
  }

  render() {

      return (
        <div> 
          <BrowserRouter>
            <Switch> { /* Similar to a switch statement - shows the component depending on the URL path */ }
              { /* Each Route below shows a different component depending on the exact path in the URL  */ }
              <Route exact path='/login' render={() => (<Login />)}/>
              <Route exact path='/dashboard' render={() => (<Dashboard user={this.state.user} />)}/> { /* TODO: create a dashboard component that will then have its own router for admin/user dashboards */ }
            </Switch>
            {this.state.loggedIn ? <Redirect to="/dashboard" /> : <Redirect to="/login" /> }
          </BrowserRouter>
        </div>
      )
  }
}


export default App;
