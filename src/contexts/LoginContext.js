import React, { useState, createContext } from 'react';

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
    const [token, setToken] = useState('');
    const [validEmail, setValidEmail] = useState('');
    const [validPassword, setValidPassword] = useState('');


    const login = (email, password) => {
        email = 'admin@admin.com.br';
        password = 'admin@1234';

        let body = JSON.stringify({
            email: email,
            password: password,
        });

        fetch('https://tubflix-api.herokuapp.com/api/v1/auth/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                Accept: 'application/json',
            },
            body: body,
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.error) {
                    alert('Erro genérico login');
                    return false;
                } else if (result.access_token) {
                    // Salvando email e senha para uso posterior
                    setValidEmail(email);
                    setValidPassword(password);
                    // Salvando token para acesso global
                    setToken(result.access_token);

                    return true;
                }
            })
            .catch((error) => {
                alert('deu erro nessa porra');
                console.log('error when trying to sign in ', error)
            });
    };

    return (
        <LoginContext.Provider
            value={{
                token,
                login,
            }}
        >
            {children}
        </LoginContext.Provider>
    );
}

export default LoginProvider;
