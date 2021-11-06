
import styles from '../styles/pages/Home.module.css';

import Header from '../components/Header'

function Home(){
    return (
        <>
            <Header/>
            <div className={styles.bgHome}>
            <h1>Home</h1>

            </div>
        </>
    )
}

export default Home;