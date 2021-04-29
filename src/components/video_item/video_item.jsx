import React, {memo} from 'react';
import styles from './video_item.module.css'

const Videoitem = memo(({video, video : {snippet}, onVideoClick, display }) => {
    const displayType = display === 'list' ? styles.list : styles.grid
    
    return (
            <li className={`${styles.container} ${displayType}`} onClick={() => onVideoClick(video)} >
                <div className={styles.video}>
                    <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt="video Thumbnail"/>
                    <div className={styles.metadata}>
                        <p className={styles.title}>{snippet.title}</p>
                        <p className={styles.channelTitle}>{snippet.channelTitle}</p>
                    </div>
                </div>
            </li>
)})

export default Videoitem;