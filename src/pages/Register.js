import React from 'react';
import '../styles/pages/register.css';

function Register() {
    return (
        <body className="body">
            <div className="container">
                <div className="form">
                    <h1 className="title">Sign Up</h1>
                    <form action="#">
                        <input type="text" id="nome" className="inputText" placeholder="Nome" />
                        <span className="inputError"></span>
                        <input type="text" id="email" className="inputText" placeholder="E-mail" />
                        <span className="inputError" id="inputErrorEmail"></span>
                        <input type="password" id="senha" className="inputText" placeholder="Senha" />
                        <span className="inputError"></span>
                        <input type="submit" value="Sign up" className="button" />
                    </form>
                    <a href="/login" className="link">Sign in now.</a>
                </div>
            </div>
        </body>
    );
}

export default Register;