import { Link, useNavigate } from "react-router-dom";

import logo from "../img/logo.png";
import perfil from "../img/perfil-user.png";
//import Logout from "../pages/Logout";

import styles from "../styles/components/Header.module.css";

function Header() {
  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem("api-token");
    navigate("/");
  }

  return (
    <>
      <div className={styles.header}>
        <Link to="/home">
          <img src={logo} alt="logo" />
        </Link>
        <div className={styles.perfil}>
          <div className={styles.arrow}></div>
          <img src={perfil} alt="perfil" />
          <div className={styles.sidebar}>
            <button onClick={logout}>Logout</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
