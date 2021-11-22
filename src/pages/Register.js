import React, { useState } from "react";
import "../styles/pages/register.css";
import logo from "../img/logo.png";

function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [erroNome, setErroNome] = useState({ valido: true, mensagem: "" });
  const [erroEmail, setErroEmail] = useState({ valido: true, mensagem: "" });
  const [erroSenha, setErroSenha] = useState({ valido: true, mensagem: "" });
  const re = /\S+@\S+\.\S+/;

  return (
    <div className="background-cadastro">
      <img className="logo" src={logo} alt="logo" />
      <div className="over-login"></div>
      <div className="container">
        <div className="form">
          <h1 className="title">Cadastre-se</h1>
          <form
            action="#"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              id="nome"
              className={
                erroNome.valido === false ? "inputText inputError" : "inputText"
              }
              placeholder="Nome"
              required
              onChange={(e) => {
                setNome(e.target.value);
              }}
              onBlur={(e) => {
                if (nome === "") {
                  setErroNome({
                    valido: false,
                    mensagem: "O campo não pode ser vazio!",
                  });
                } else {
                  setErroNome({ valido: true, mensagem: "" });
                }
              }}
            />
            <div className={erroNome.valido === false ? "mensageError" : ""}>
              {" "}
              {erroNome.mensagem}{" "}
            </div>

            <input
              type="email"
              id="email"
              className={
                erroEmail.valido === false
                  ? "inputText inputError"
                  : "inputText"
              }
              placeholder="E-mail"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              onBlur={(e) => {
                if (email === "") {
                  setErroEmail({
                    valido: false,
                    mensagem: "O campo não pode ser vazio!",
                  });
                } else if (!re.test(email)) {
                  setErroEmail({
                    valido: false,
                    mensagem: "Insira um email valido!",
                  });
                } else {
                  setErroEmail({ valido: true, mensagem: "" });
                }
              }}
            />
            <div className={erroEmail.valido === false ? "mensageError" : ""}>
              {" "}
              {erroEmail.mensagem}{" "}
            </div>

            <input
              type="password"
              id="senha"
              className={
                erroSenha.valido === false
                  ? "inputText inputError"
                  : "inputText"
              }
              placeholder="Senha"
              required
              onChange={(e) => {
                setSenha(e.target.value);
              }}
              onBlur={(e) => {
                if (senha === "") {
                  setErroSenha({
                    valido: false,
                    mensagem: "O campo não pode ser vazio!",
                  });
                } else if (senha.length < 8) {
                  setErroSenha({
                    valido: false,
                    mensagem: "A senha precisa ter no minimo 8 caracteres!",
                  });
                } else {
                  setErroSenha({ valido: true, mensagem: "" });
                }
              }}
            />
            <div className={erroSenha.valido === false ? "mensageError" : ""}>
              {" "}
              {erroSenha.mensagem}{" "}
            </div>

            <input type="submit" value="Cadastre-se" className="button" />
          </form>
          <a href="/" className="link">
            já tem login? <span> Faça o login </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Register;
