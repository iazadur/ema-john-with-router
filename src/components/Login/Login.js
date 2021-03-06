import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth()
    const location = useLocation()
    const histroy = useHistory()
    const redirect_uri = location.state?.from || "/";

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                histroy.push(redirect_uri)
            })
    }
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
                <button onClick={handleGoogleSignIn} className="btn-regular">google sign in</button>
            </div>
        </div>
    );
};

export default Login;