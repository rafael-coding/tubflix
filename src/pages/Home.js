import styles from "../styles/pages/Home.module.css";
import { useNavigate } from "react-router-dom";

import { Navigate } from "react-router-dom";
import Header from "../components/Header";
import Videos from "../components/Videos";
import {React, useState, useEffect} from 'react';
import axios from 'axios';

const apiUrl = 'https://tubflix-api.herokuapp.com/api/v1';

function Home() {
  const navigate = useNavigate();

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

            console.log(videos.data);

  function isLogged() {
    const local = localStorage.getItem("api-token");
    if (local) {
      return true;
    } else {
      navigate("/");
    }
  }
  return (
    <>
      {isLogged()}
      <Header />
      <div className={styles.bgHome}>
        <Videos />
      </div>
    </>
  );
}

export default Home;
