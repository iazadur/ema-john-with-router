import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Login.css'

const Login = () => {
    const {signInUsingGoogle} = useFirebase()
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" name="email" id="" />
                    <br />
                    <input type="password" name="password" id="" />
                    <br />
                    <input type="submit" name="submit" id="" />
                </form>
                <p>new to ema-jhon? <Link to="/register"> Create Account</Link> </p>
                <div>-------------or-----------</div>
                <button onClick={signInUsingGoogle} className="btn-regular">google sign in</button>
            </div>
        </div>
    );
};

export default Login;