
import styles from '../styles/pages/Home.module.css';
import { Navigate } from "react-router-dom";

import Header from '../components/Header'

function Home(props){
    return (
        <>
            {props.authToken ? '' : <Navigate to="/" /> }
            <Header/>
            <div className={styles.bgHome}>
            <h1>Home</h1>

            </div>
        </>
    )
}

export default Home;