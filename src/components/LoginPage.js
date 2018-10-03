import React from 'react';
import {startLogin} from '../actions/auth';
import {connect} from 'react-redux';


const LoginPage = ({startLogin}) => (
    <div>
        <h1>Login Page</h1>
        <label>Username: </label>
        <input type="text" placeholder="Username" />
        <label>Password: </label>
        <input type="password" placeholder="Password" />
        <button>Login</button>
        <p>To Login with Google:</p>
        <button onClick={startLogin}>Login with Google</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);