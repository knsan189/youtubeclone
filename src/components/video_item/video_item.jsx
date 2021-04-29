import React from 'react';
import styles from './video_item.module.css'

const Videoitem = ({ video : {snippet} }) => (
            <li className={styles.container}>
                <div className={styles.video}>
                    <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt="video Thumbnail"/>
                    <div className={styles.metadata}>
                        <p className={styles.title}>{snippet.title}</p>
                        <p className={styles.channelTitle}>{snippet.channelTitle}</p>
                    </div>
                </div>
            </li>
);

export default Videoitem;