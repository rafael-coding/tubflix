import { React, useContext, useEffect, useState } from 'react';
import styles from "../styles/pages/Home.module.css";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import playBtn from "../img/play-btn.png";
import { LoginContext } from "../contexts/LoginContext";
import axios from "axios";
import Carrousel from "../components/Carrousel";



function Home() {
    const { token } = useContext(LoginContext);
    const [blackHeader, setBlackHeader] = useState(false);
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    function isLogged() {
        if (token === '') {
            navigate("/");
        }
    }

    useEffect(() => {
        const scrollLisener = () => {
            if (window.scrollY > 10) {
                setBlackHeader(true);
            } else {
                setBlackHeader(false);
            }
        }
        window.addEventListener('scroll', scrollLisener);

        // Buscando as categorias
        axios.get(`${process.env.REACT_APP_BASE_URL}/categories`, {
            headers: {
                "content-type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
        }).then(
            function (response) {
                setCategories(response.data.data);
            }
        ).catch(
            function () {
                alert('erro ao buscar as categorias');
            }
        );
    }, [token]);

    return (
        <>
            {isLogged()}
            <Header black={blackHeader} />
            <div className={styles.trailer}>
                <div className={styles.overTrailer}></div>
                <div className={styles.contentTrailer}>
                    <h1>Eu tava testando ele</h1> <br />
                    <p>Set for release in June 2020, the Toy Story spin-off follows the storry of the actual astronaut who inspired the Buzz Lightyear toy.

                        Buzz Lightyear will be voiced by American actor Chris Evans who has spoken about his love for Pixar movies on many occasions. </p>
                    <div className={styles.btnContentTrailer}>
                        <button className={styles.btnAssitirTraier}>
                            <img src={playBtn} alt={playBtn} />
                            <span>Assistir</span>
                        </button>
                    </div>

                </div>
            </div>
            <div className={styles.bgHome}>
                {categories.map(category => {
                    return (
                        <Carrousel
                            category={category}
                            key={category.id}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default Home;
