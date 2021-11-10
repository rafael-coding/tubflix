
import styles from '../styles/pages/Home.module.css';
import { Navigate } from "react-router-dom";

import Header from '../components/Header'
import Videos from '../components/Videos'

function Home(props){

    return (
        <>
            {props.authToken ? '' : <Navigate to="/" /> }
            <Header/>
            <div className={styles.bgHome}>
            <Videos />
            </div>
        </>
    )
}

export default Home;