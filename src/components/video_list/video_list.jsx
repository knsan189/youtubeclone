import React from 'react';
import Videoitem from '../video_item/video_item';

const Videolist = (props) => (
            <ul>
                {props.videos.map(video => <Videoitem video={video} key={video.id}/>)}
            </ul>
)

export default Videolist;