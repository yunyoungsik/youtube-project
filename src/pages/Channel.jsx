import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api';

import { AiOutlineBell } from 'react-icons/ai';
import { BsPlay } from 'react-icons/bs';
import { BiVideo } from 'react-icons/bi';

import VideoSearch from '../components/video/VideoSearch';

// 단위
const formatCount = (count) => {
    return count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Channel = () => {
    const { channelId } = useParams();
    const [channelDetail, setChannelDetail] = useState();
    const [channelVideo, setChannelVideo] = useState([]);
    // const [loading, setLoading] = useState();
    // const [nextPageToken, setNextPageToken] = useState(null);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const data = await fetchFromAPI(`channels?part=snippet&id=${channelId}`);
                // console.log(data)
                setChannelDetail(data.items[0])

                const videoData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet&order=date`)
                console.log(videoData)
                setChannelVideo(videoData.items)
            } catch (error) {
                console.log("Error ->", error)
            }
        }
        fetchResults();
    }, [channelId])

    return (
        <section id='channelPage'>
            {channelDetail && (
                <div className='channel__inner'>
                    <div className='channel__header' style={{ backgroundImage: `url(${channelDetail.brandingSettings.image.bannerExternalUrl})` }}>
                        <div className='circle'>
                            <img src={channelDetail.snippet.thumbnails.high.url} alt={channelDetail.brandingSettings.channel.title} />
                        </div>
                    </div>
                    <div className='channel__info'>
                        <h3 className='title'>{channelDetail.snippet.title}</h3>
                        <p className='desc'>{channelDetail.snippet.description}</p>
                        <div className='info'>
                            <div><AiOutlineBell /><span>{formatCount(channelDetail.statistics.subscriberCount)}</span></div>
                            <div><BiVideo /><span>{formatCount(channelDetail.statistics.videoCount)}</span></div>
                            <div><BsPlay /><span>{formatCount(channelDetail.statistics.viewCount)}</span></div>
                        </div>
                    </div>
                    <div className='channel__video video__inner'>
                        <VideoSearch videos={channelVideo} layout="channel" />
                    </div>
                    <div className='channel__more'></div>
                </div>
            )}
        </section>
    )
}

export default Channel