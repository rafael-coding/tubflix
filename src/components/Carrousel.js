import { React, useState, useEffect, useContext } from "react";
import { LoginContext } from "../contexts/LoginContext.js";
import axios from "axios";

import styles from "../styles/components/Video.module.css";
import leftArrow from "../img/left-arrow.png";
import rigthArrow from "../img/right-arrow.png";
import VideoCard from "./VideoCard.js";
// import { scryRenderedComponentsWithType } from "react-dom/test-utils";

function Carrousel({ category }) {
    const { token } = useContext(LoginContext);
    const [videos, setVideos] = useState([]);
    const [scrollX, setSecollX] = useState(0);

    useEffect(() => {
        const ac = new AbortController();

        axios.get(`${process.env.REACT_APP_BASE_URL}/categories/${category.id}/videos`, {
            headers: {
                "content-type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
        }).then(
            function (response) {
                setVideos(response.data.data);
            }
        ).catch(
            function (error) {
                console.log(error);
            }
        );

        return () => ac.abort();
    }, [category.id, token]);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0;
        }
        setSecollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = videos.length * 302;
        if (window.innerWidth - listW > x) {
            x = window.innerWidth - listW - 110;
        }
        setSecollX(x);
    };

    return (
        <>
            {videos.length > 0 && (
                <div>
                    <div className={styles.rowsList}>
                        <h2>{category.name}</h2>
                        <div className={styles.divLeftArrow} onClick={handleLeftArrow}>
                            <img src={leftArrow} alt={leftArrow} />
                        </div>
                        <div className={styles.divRighttArrow} onClick={handleRightArrow}>
                            <img src={rigthArrow} alt={rigthArrow} />
                        </div>
                        <div className={styles.rowsIntList} style={{ marginLeft: scrollX, width: videos.length * 302 }}>
                            {videos.map(video => (
                                <VideoCard video={video} key={video.id} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Carrousel;
