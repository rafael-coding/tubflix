import { Link, useNavigate } from "react-router-dom";

import logo from "../img/logo.png";
import perfil from "../img/perfil-user.png";
//import Logout from "../pages/Logout";

import styles from "../styles/components/Header.module.css";

function Header({ black }) {
    const navigate = useNavigate();
    function logout() {
        navigate("/");
    }

    return (
        <>
            <header className={black ? styles.header : ''}>
                <Link to="/home">
                    <img src={logo} alt="logo" />
                </Link>
                <div className={styles.perfil}>
                    <div className={styles.arrow}></div>
                    <img src={perfil} alt="perfil" />
                    <div className={styles.sidebar}>
                        <Link to="/add-category">Add categoria</Link>
                        <Link to="/add-video">Add vídeo</Link>
                        <button onClick={logout}>Logout</button>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
