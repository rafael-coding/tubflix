import { React, useState, useEffect } from "react";
import axios from "axios";

import Modal from "./Modal.js";
import styles from "../styles/components/Video.module.css";
import leftArrow from "../img/left-arrow.png";
import rigthArrow from "../img/right-arrow.png";
import playBtn from "../img/play-btn.png";
import thumbUp from "../img/thumbs-up.png"
import thumbDown from "../img/thumbs-down.png"
// import { scryRenderedComponentsWithType } from "react-dom/test-utils";

const apiUrl = "https://tubflix-api.herokuapp.com/api/v1";

function Videos() {
  const [videos, setVideos] = useState([]);
  const [modal, setModal] = useState(false);
  // const [authToken, setAuthToken] = useState(false);

  useEffect(() => {
    axios
      .get(`${apiUrl}/categories/4/videos`, {
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("api-token")}`,
        },
      })
      .then(function (response) {
        setVideos(response.data);
        // console.log(`${apiUrl}/videos`)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

            console.log(videos);
        const [scrollX, setSecollX] = useState(0);
        const handleLeftArrow = () =>{
            let x = scrollX + Math.round(window.innerWidth / 2);
            if(x > 0){
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
        <div>
            <div className={styles.rowsList}> 
                <h2>Populares na Netflix</h2>
                <div className={styles.divLeftArrow} onClick={handleLeftArrow}>
                    <img src={leftArrow} alt={leftArrow}/>
                </div>
                <div className={styles.divRighttArrow} onClick={handleRightArrow}>
                    <img src={rigthArrow} alt={rigthArrow}/>
                </div>
                <div className={styles.rowsIntList} style={{marginLeft: scrollX, width: videos.length * 302}}>
                    {videos.map((item, key)=>(
                        <div key={key} className={styles.contentVideos}>
                            <div key={key} className={styles.divImg}>
                                <img className={styles.thumbImg} src={item.url_thumbnail_image} alt={key} key={key}/>
                                <div className={styles.infoVideos}>
                                    <div className={styles.divBtns}>
                                        <button className={styles.btnPlay} src={item.url_video} key={item.url_video}>
                                            <img src={playBtn} alt={playBtn}/>
                                        </button>
                                        <button className={styles.btnLike}>
                                            <img src={thumbUp} alt={thumbUp}/>
                                        </button>
                                        <button className={styles.btnLike}>
                                            <img src={thumbDown} alt={thumbDown}/>
                                        </button>
                                    </div>
                                    <div className={styles.divTags}>   
                                        <p> <span> 96% relevante </span></p>
                                    </div>
                                    <div className={styles.divTags}>   
                                        <p>Comédia, meme, testando ele</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
      </div>
    </>
  );
}

export default Videos;
