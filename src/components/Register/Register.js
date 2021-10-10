import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Register: Create Account</h2>
                <form onSubmit="">
                    <input type="email" placeholder="Email Address" name="email" id="" /> <br />
                    <input type="password" placeholder="Your Password" name="password" id="" /> <br />
                    <input type="password" placeholder="Re-Enter Password" name="password" id="" /> <br /> <br />
                    <input type="submit" value="submit" /> <br />

                </form>
                <p>Already Have an Account <Link to='/login'>Login</Link></p>
                <div>-------------or-----------</div>
                <button className="btn-regular">google sign in</button>
            </div>
            
        </div>
    );
};

export default Register;