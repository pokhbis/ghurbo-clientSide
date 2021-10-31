import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../Hook/useAuth';
import './Login.css';


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }


    return (
        <div className="login-form">
            <div className="login-design" >

                <div>
                    <h3>Please Login</h3>
                    <div>---------------------------</div>
                    <h4>Log-In Using Google</h4>

                </div>
                <div>
                    <button className="login-btn" onClick={handleGoogleLogin}>Google Sign In</button>
                </div>

                {/* <button onClick={signInUsingGoogle}>Google Sign In</button> */}
            </div>
        </div>

    );
};

export default Login;