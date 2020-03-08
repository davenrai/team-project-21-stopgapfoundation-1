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
        isAdmin: false 
      }
    };
  }

  login = (user) => {
    const newUser = { ... this.state.user}
    Object.assign(newUser, user);
    this.setState({
      loggedIn: true,
      user: newUser
    });
  }

  render() { 
      return (
        <div> 
          <BrowserRouter>
            <Switch> { /* Similar to a switch statement - shows the component depending on the URL path */ }
              { /* Each Route below shows a different component depending on the exact path in the URL  */ }
              <Route path='/login' render={() => (<Login loggedIn={this.state.loggedIn} login={this.login} user={this.state.user} />) } />
              <Route path='/dashboard' render={() => (<Dashboard loggedIn={this.state.loggedIn} user={this.state.user} />) } />
              <Redirect path='/' to={this.state.loggedIn ? "/dashboard" : "/login" } />
            </Switch>
            
          </BrowserRouter>
        </div>
      )
  }
}


export default App;
