import {React, useState} from 'react';
import { Link, Navigate } from "react-router-dom";

import Header from "../components/Header";

import '../styles/pages/login.css';

function Login(props){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [message, setMessage] = useState('');

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        getLoginAuth();
    }


    const getLoginAuth = () => {

        let body = JSON.stringify({
            "email": email,
            "password": password,
        });

        fetch('https://tubflix-api.herokuapp.com/api/v1/auth/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: body
        })
        .then(response => response.json())
        .then(result => {
            if (result.error) {
                setMessage('Credentials not found!');
            } else if (result.access_token) {
                //set global access token
                //props.setAuthToken(result.access_token);
                localStorage.setItem('api-token', result.access_token);
                console.log('Successfully logged in');
            }
        })
        .catch(error => console.log('error when trying to sign in ', error));
    };

    const closeMessage = (e) => {
        setMessage('');
    }

    return (
        <div className="login-page">
            {props.authToken ? <Navigate to="/home" /> : '' }

            <Header />
            <div className="login-page-content">
                <div className="login-component">

                    <div className="transparent-background"></div>

                    <div className="title">
                        <h1>Sign In</h1>
                    </div>

                    <form onSubmit={handleLoginSubmit}>
                        
                        <div className="form-user-messages-wrapper" style={{display: message ? 'block' :'none'}}>
                            <div className="form-user-messages">
                                {message}
                            </div>
                            <div className="close-form-user-messages" onClick={closeMessage}>
                                ✖️
                            </div>
                        </div>

                        <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />

                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />

                        <button type="submit">Sign In</button>
                    </form>

                    <div className="new-register">
                        <h5>New here? <Link to="/cadastro">Sign up now.</Link></h5>
                    </div>

                </div>
            </div> 
        </div>
    )
}

export default Login;