
import {React, useState, useEffect} from 'react';
import axios from 'axios';

import styles from '../styles/components/Video.module.css';
import leftArrow from "../img/left-arrow.png";
import rigthArrow from "../img/right-arrow.png";

const apiUrl = 'https://tubflix-api.herokuapp.com/api/v1';

function Videos(){

    const [videos, setVideos] = useState([]);
    // const [authToken, setAuthToken] = useState(false);


    useEffect(() => {
        axios.get(`${apiUrl}/categories/4/videos`, 
        {   
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("api-token")}`
            }
        })
        .then(function (response) {
            setVideos(response.data)
            // console.log(`${apiUrl}/videos`)
        })
        .catch(function (error) {
            console.log(error);
        });
    }, []);

            // console.log(videos);
        const [scrollX, setSecollX] = useState(-400);
        const handleLeftArrow = () =>{
            let x = scrollX + Math.round(window.innerWidth / 2);
            if(x > 0){
                x = 0;
            }
            setSecollX(x);
        }

        const handleRightArrow = () =>{
            let x = scrollX - Math.round(window.innerWidth / 2);
            let listW = videos.length * 302;
            if((window.innerWidth - listW) > x){
                x = (window.innerWidth - listW) - 110;
            }
            setSecollX(x);
        }

    return (
        <>
        <div>
            <h2>Meme list</h2>
            <div className={styles.rowsList}> 
                <div className={styles.divLeftArrow} onClick={handleLeftArrow}>
                    <img src={leftArrow} alt={leftArrow}/>
                </div>
                <div className={styles.divRighttArrow} onClick={handleRightArrow}>
                    <img src={rigthArrow} alt={rigthArrow}/>
                </div>
                <div className={styles.rowsIntList} style={{marginLeft: scrollX, width: videos.length * 302}}>
                    {videos.map((item, key)=>(
                        <div key={key} className={styles.divImg}>
                            <img src={item.url_thumbnail_image} alt={key} key={key}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>


    )
    
};

export default Videos