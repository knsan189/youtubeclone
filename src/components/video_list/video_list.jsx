import React from 'react';
import Videoitem from '../video_item/video_item';
import styles from './video_list.module.css'

const Videolist = ({videos, onVideoClick, display}) => (
            <ul className={styles.videos}>
                {videos.map(video => <Videoitem video={video} key={video.id} onVideoClick={onVideoClick} display={display} />)}
            </ul>
)

export default Videolist;