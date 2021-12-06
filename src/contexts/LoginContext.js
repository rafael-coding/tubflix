import axios from 'axios';
import React, { useState, createContext } from 'react';

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
    const [token, setToken] = useState('');
    const [validEmail, setValidEmail] = useState('');
    const [validPassword, setValidPassword] = useState('');
    const [message, setMessage] = useState('');

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
                    setMessage(response.error);
                    alert('Erro genérico login');
                } else if ('access_token' in response.data) {
                    // Salvando email e senha para uso posterior
                    setValidEmail(email);
                    setValidPassword(password);
                    // Salvando token para acesso global
                    setToken(response.data.access_token);

                    // Resetando mensagem
                    setMessage('');
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

    function logout() {
        axios.post(`${process.env.REACT_APP_BASE_URL}/auth/logout`, {
            headers: {
                "content-type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            }
        }).then(
            response => {
                if ('message' in response.data && response.data.message === 'Successfully logged out') {
                    setToken('');
                    setMessage(response.data.message);
                    alert('logout bem sucedido');
                } else {
                    alert('deu merda no logout');
                }
            }
        ).catch(
            error => {
                alert('deu merda no logout');
            }
        );
    }

    function isLogged() {
        return token !== '' && message === '';
    }

    return (
        <LoginContext.Provider
            value={{
                token,
                login,
                logout,
                loginExpired,
                isLogged,
            }}
        >
            {children}
        </LoginContext.Provider>
    );
}

export default LoginProvider;
