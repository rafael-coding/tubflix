import axios from 'axios';
import React, { useState, createContext } from 'react';

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
    const [token, setToken] = useState('');
    const [validEmail, setValidEmail] = useState('');
    const [validPassword, setValidPassword] = useState('');


    function login(email, password) {
        email = 'admin@admin.com.br';
        password = 'admin@1234';

        axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`, {
            email: email,
            password: password,
        }, {
            headers: {
                "content-type": "application/json",
                Accept: "application/json",
            }
        }).then(
            response => {
                if ('error' in response.data) {
                    alert('Erro genérico login');
                } else if ('access_token' in response.data) {
                    // Salvando email e senha para uso posterior
                    setValidEmail(email);
                    setValidPassword(password);
                    // Salvando token para acesso global
                    setToken(response.data.access_token);
                }
            }
        ).catch(
            error => {
                console.log(error);
                alert('deu merda');
            }
        );
    };

    function loginExpired() {
        login(validEmail, validPassword);
    }

    return (
        <LoginContext.Provider
            value={{
                token,
                login,
                loginExpired,
            }}
        >
            {children}
        </LoginContext.Provider>
    );
}

export default LoginProvider;
