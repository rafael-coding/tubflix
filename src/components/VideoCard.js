import React from "react";

import styles from "../styles/components/Video.module.css";
import playBtn from "../img/play-btn.png";
import thumbUp from "../img/thumbs-up.png";
import thumbDown from "../img/thumbs-down.png";

function VideoCard({ video }) {
    return (
        <div key={video.id} className={styles.contentVideos}>
            <div key={video.id} className={styles.divImg}>
                <img className={styles.thumbImg} src={video.url_thumbnail_image} alt={video.id} key={video.id} />
                <div className={styles.infoVideos}>
                    <div className={styles.divBtns}>
                        <button className={styles.btnPlay} src={video.url_video} key={video.url_video}>
                            <img src={playBtn} alt={playBtn} />
                        </button>
                        <button className={styles.btnLike}>
                            <img src={thumbUp} alt={thumbUp} />
                        </button>
                        <button className={styles.btnLike}>
                            <img src={thumbDown} alt={thumbDown} />
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
    );
}

export default VideoCard;
