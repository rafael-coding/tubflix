import { React, useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginContext } from '../contexts/LoginContext';
import logo from '../img/logo.png';

// import Header from '../components/Header';

// import '../styles/pages/Login.module.css';
import '../styles/pages/login.css';

function Login() {
    const { token, login } = useContext(LoginContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        login(email, password);
    };

    function goHome() {
        navigate('/home');
    }

    return (
        <div className="login-page">
            {token !== '' && goHome()}

            {/* <Header /> */}
            <img className="logo" src={logo} alt="logo" />
            <div className="over-login"></div>
            <div className="login-page-content">
                <div className="login-component">
                    <div className="transparent-background"></div>

                    <div className="title">
                        <h1>Entrar</h1>
                    </div>

                    <form onSubmit={handleLoginSubmit}>
                        {/* <div
                            className="form-user-messages-wrapper"
                            style={{ display: message ? "block" : "none" }}
                        >
                            <div className="form-user-messages">{message}</div>
                            <div className="close-form-user-messages" onClick={closeMessage}>
                                ✖️
                            </div>
                        </div> */}

                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />

                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Senha"
                        />

                        <button type="submit">Entrar</button>
                    </form>

                    <div className="new-register">
                        <h5>
                            Novo por aqui? <Link to="/cadastro">Registre agora.</Link>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
