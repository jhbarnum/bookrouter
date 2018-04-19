import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from './Navigation';
//import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
//import HomePage from './Home';
import HomePage from '../pages/Bookmarks';
import Detail from '../pages/Detail';

import * as routes from '../constants/routes';
import { firebase } from '../firebase';

//const App = () =>

  class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: null,
      };
    }

    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.setState(() => ({ authUser }))
          : this.setState(() => ({ authUser: null }));
      });
    }
    
render() {
  return (
  <Router>
    <div>
      <Navigation authUser={this.state.authUser} />

      <hr />

      {/* <Route
        exact path={routes.LANDING}
        component={() => <LandingPage />}
      /> */}
      <Route
        exact path={routes.SIGN_UP}
        component={() => <SignUpPage />}
      />
      <Route
        exact path={routes.SIGN_IN}
        component={() => <SignInPage />}
      />
      <Route
        exact path={routes.PASSWORD_FORGET}
        component={() => <PasswordForgetPage />}
      />
      <Route
        exact path={routes.HOME}
        component={() => <HomePage />}
      />
      <Route
        path="/bookmarks/:id"
        //path={routes.ACCOUNT}
        //component={() => <AccountPage />}
        component={Detail}
      />
    </div>
  </Router>
  );
}
  }

export default App;
