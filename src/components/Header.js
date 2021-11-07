import { Link } from "react-router-dom";

import logo from "../img/logo.png"
import perfil from "../img/perfil-user.png"

import styles from '../styles/components/Header.module.css';

function Header(){
    return (
        <>
            <div className={styles.header}>
                <Link to="/home">
                    <img src={logo} alt="logo"/>
                </Link>
                <div className={styles.perfil}>
                    <div className={styles.arrow}></div>
                    <img src={perfil} alt="perfil"/>
                <div className={styles.sidebar}>
                <Link to="/logout">
                    Logout
                </Link>
                </div>

                </div>
            </div>
        </>


    )
    
};

export default Header