import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/logo.png";

// import Header from "../components/Header";

// import '../styles/pages/Login.module.css';
import "../styles/pages/login.css";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    getLoginAuth();
  };

  const navigate = useNavigate();

  function goHome() {
    navigate("/home");
  }

  const getLoginAuth = () => {
    let body = JSON.stringify({
      email: email,
      password: password,
    });

    fetch("https://tubflix-api.herokuapp.com/api/v1/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
      body: body,
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.error) {
          setMessage("Email não encontrado!");
        } else if (result.access_token) {
          // set global access token
          // props.setAuthToken(result.access_token);
          localStorage.setItem("api-token", result.access_token);
          console.log("Successfully logged in");
          goHome();
        }
      })
      .catch((error) => console.log("error when trying to sign in ", error));
  };

  const closeMessage = (e) => {
    setMessage("");
  };

  return (
    <div className="login-page">
      {props.authToken ? goHome() : ""}

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
            <div
              className="form-user-messages-wrapper"
              style={{ display: message ? "block" : "none" }}
            >
              <div className="form-user-messages">{message}</div>
              <div className="close-form-user-messages" onClick={closeMessage}>
                ✖️
              </div>
            </div>

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
