import {React, useEffect} from 'react';

import { Navigate } from "react-router-dom";

function Logout(props){

    const getLoginAuth = () => {
        fetch('http://localhost:8000/api/auth/logout', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + props.authToken
            },
            body: ''
        })
        .then(response => response.json())
        .then(result => {
            //unset global access token
            props.setAuthToken(false);
            console.log(result.message)
        })
        .catch(error => console.log('error when trying to sign out ', error));
    };

    useEffect(() => {
        getLoginAuth();
    });

    return (
        <div>
            {props.authToken ? '' : <Navigate to="/" /> }
        </div>
    )
};

export default Logout