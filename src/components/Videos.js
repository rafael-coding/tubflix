import {React, useState, useEffect} from 'react';
import axios from 'axios';

import styles from '../styles/components/Video.module.css';


const apiUrl = 'https://tubflix-api.herokuapp.com/api/v1';

function Videos(){

    const [videos, setVideos] = useState([]);
    // const [authToken, setAuthToken] = useState(false);


    useEffect(() => {
        axios.get(`${apiUrl}/videos`, 
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

            console.log(videos);

    return (
        <>
            <div className={styles.heroContent}>

            </div>
        </>


    )
    
};

export default Videos