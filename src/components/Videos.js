import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styles from '../styles/components/Video.module.css';



function Videos(){
    const [video, setVideos] = useState([]);

        axios.get('https://tubflix-api.herokuapp.com/api/v1/categories')
            .then(function (response) {
                setVideos(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })

            console.log(video);

    return (
        <>
            <div className={styles.heroContent}>

            </div>
        </>


    )
    
};

export default Videos