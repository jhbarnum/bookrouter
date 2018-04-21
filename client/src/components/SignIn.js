import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Panel from "./Panel";

import { SignUpLink } from './SignUp';
import { auth } from '../firebase';
import * as routes from '../constants/routes';

const SignInPage = ({ history }) =>
    <div>
        <Panel>
            <h1>Sign In</h1>
            <SignInForm history={history} />
        
            <SignUpLink />
        </Panel>
    </div>

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {
        const {
      email,
            password,
    } = this.state;

        const {
      history,
    } = this.props;

        auth.doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState(() => ({ ...INITIAL_STATE }));
                history.push(routes.HOME);
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        event.preventDefault();
    }

    render() {
        const {
      email,
            password,
            error,
    } = this.state;

        const isInvalid =
            password === '' ||
            email === '';

        return (
            <form className="form-horizontal">
     

                <form onSubmit={this.onSubmit}>
                    <input
                        value={email}
                        onChange={event => this.setState(byPropKey('email', event.target.value))}
                        type="text" style={{color: "black"}}
                        placeholder="Email Address"
                    />
                    <input
                        value={password}
                        onChange={event => this.setState(byPropKey('password', event.target.value))}
                        type="password" style={{ color: "black" }}
                        placeholder="Password"
                    />
                    <button disabled={isInvalid} type="submit" class="btn btn-primary" >
                        Sign In
                    </button>  

                    {error && <p>{error.message}</p>}
                </form>
           </form>
        );
    }
}

export default withRouter(SignInPage);

export {
    SignInForm,
};
