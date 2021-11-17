import styles from "../styles/pages/Home.module.css";
import {React, useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Videos from "../components/Videos";
import playBtn from "../img/play-btn.png";



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
          <div className={styles.overTrailer}></div>
            <div className={styles.contentTrailer}>
              <h1>Eu tava testando ele</h1> <br/>
              <p>Set for release in June 2020, the Toy Story spin-off follows the storry of the actual astronaut who inspired the Buzz Lightyear toy.

                Buzz Lightyear will be voiced by American actor Chris Evans who has spoken about his love for Pixar movies on many occasions. </p>
              <div className={styles.btnContentTrailer}>
                <button className={styles.btnAssitirTraier}>
                  <img src={playBtn} alt={playBtn}/>
                      <span>Assistir</span>
                </button>
              </div>

            </div>
        </div>
        <div className={styles.bgHome}>
          <Videos />
        </div>
      </>
    );
}

export default Home;
