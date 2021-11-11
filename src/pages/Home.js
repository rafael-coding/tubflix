
import styles from '../styles/pages/Home.module.css';
import { Navigate } from "react-router-dom";
import {React, useState, useEffect} from 'react';
import axios from 'axios';

import Header from '../components/Header'
import Videos from '../components/Videos'

const apiUrl = 'https://tubflix-api.herokuapp.com/api/v1';

function Home(props){

    const [videos, setVideos] = useState([]);
    // const [authToken, setAuthToken] = useState(false);


    useEffect(() => {
        axios.get(`${apiUrl}/categories`, 
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
            {props.authToken ? '' : <Navigate to="/" /> }
            <Header/>
            <div className={styles.bgHome}>
                <section>
                    {videos.map((item, key)=>{
                        <div>
                            {item.data.name}
                        </div>
                    })}
                </section>
                <Videos/>
            </div>
        </>
    )
}

export default Home;