import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from './SignOut';
import * as routes from '../constants/routes';

const Navigation = ({ authUser }) =>
  <div>
    {authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </div>

const NavigationAuth = () =>
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <ul className="nav navbar-nav">
    <a className="navbar-brand" href="/"> Tunafish App
      </a>
    {/* <li><Link to={routes.LANDING}>Landing</Link></li> */}
    <li><Link to={routes.HOME}>Home</Link></li>
      {/* <li><Link to={routes.ACCOUNT}>Details</Link></li> below: /*SignOutButton */}
    <li><SignOutButton/></li>
  </ul>
</nav>
const NavigationNonAuth = () =>
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <ul className="nav navbar-nav" >
        <a className="navbar-brand" href="/"> </a>
      {/* <li><Link to={routes.LANDING}>Landing</Link></li> */}
      <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
    </ul>
  </nav>

export default Navigation;
