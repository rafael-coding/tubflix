import styles from "../styles/pages/Home.module.css";
import {React, useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Videos from "../components/Videos";



function Home() {
    const [blackHeader, setBlackHeader] = useState(false);
    const navigate = useNavigate();

    function isLogged() {
      const local = localStorage.getItem("api-token");
      if (local) {
        return true;
      } else {
        navigate("/");
      }
    }

    useEffect(()=>{
        const scrollLisener = () => {
            if(window.scrollY > 10){
                setBlackHeader(true);
            } else{
                setBlackHeader(false);
            }
        }
        window.addEventListener('scroll', scrollLisener);

        return () =>{
            window.removeEventListener('scroll', scrollLisener);
        }
    }, []);

    return (
      <>
        {isLogged()}
        <Header black={blackHeader} />
        <div className={styles.trailer}>
        </div>
        <div className={styles.bgHome}>
          <Videos />
        </div>
      </>
    );
}

export default Home;
