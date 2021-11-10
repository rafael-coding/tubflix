import {React, useState, useEffect} from 'react';
import axios from 'axios';

import styles from '../styles/components/Video.module.css';


const apiUrl = 'https://tubflix-api.herokuapp.com/api/v1';

function Videos(){

    const [authToken, setAuthToken] = useState(false);
  
    //get token at localstorage
    useEffect(() => {
      setAuthToken(localStorage.getItem("api-token"));
    //   console.log(authToken);
    }, [authToken]);
    // console.log(authToken);

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        axios.get(`${apiUrl}/videos`, 
        {   
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${authToken}`
            }
        }
    )
        .then(function (response) {
            setVideos(response.data)
            // console.log(`${apiUrl}/videos`)
        })
        .catch(function (error) {
            console.log(error);
        })
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