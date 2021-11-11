import styles from "../styles/pages/Home.module.css";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Videos from "../components/Videos";
//import { useEffect } from "react";

function Home() {
  const navigate = useNavigate();

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
