import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { fetchFromAPI } from '../utils/api';

import { AiOutlineLike } from 'react-icons/ai';
import { BsPlay } from 'react-icons/bs';
import { BiCommentDetail } from 'react-icons/bi';

// 단위
const formatCount = (count) => {
    return count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


const VIdeo = () => {
    const { videoId } = useParams();
    const [videoDetail, setVideoDetail] = useState(null);

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`)
            .then((data) => {
                console.log(data)
                setVideoDetail(data.items[0])
            })
    }, [videoId])

    return (
        <section id='VideoPage'>
            <h2>동영상</h2>
            {videoDetail && (
                <div className='video__view'>
                    <div className='video__play'>
                        <ReactPlayer
                            playing={true}
                            url={`https://www.youtube.com/watch?v=${videoId}`}
                            width="100%"
                            height="100%"
                        // style={{ position: "absolute", top: 0, left: 0 }}
                        />
                    </div>
                    <div className='video__info'>
                        <h2 className='video__title'>{videoDetail.snippet.title}</h2>
                        <div className='video__channel'>
                            <div className='id'>
                                <Link to={`/channel/${videoDetail.snippet.channelId}`}>
                                    {videoDetail.snippet.channelTitle}
                                </Link>
                            </div>
                            <div className='count'>
                                <span className='view'><BsPlay />{formatCount(videoDetail.statistics.viewCount)}</span>
                                <span className='like'><AiOutlineLike />{videoDetail.statistics.likeCount}</span>
                                <span className='comment'><BiCommentDetail />{videoDetail.statistics.commentCount}</span>
                            </div>
                        </div>
                        <div className='video__desc'>
                            {videoDetail.snippet.description}
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default VIdeo