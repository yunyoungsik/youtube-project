import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api';

import { AiOutlineBell } from 'react-icons/ai';
import { BsPlay } from 'react-icons/bs';
import { BiVideo } from 'react-icons/bi';

import VideoSearch from '../components/video/VideoSearch';
import Main from '../components/section/Main';

// 단위
const formatCount = (count) => {
    return count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Channel = () => {
    const { channelId } = useParams();
    const [channelDetail, setChannelDetail] = useState();
    const [channelVideo, setChannelVideo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nextPageToken, setNextPageToken] = useState(null);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const data = await fetchFromAPI(`channels?part=snippet&id=${channelId}`);
                // console.log(data)
                setChannelDetail(data.items[0])

                const videoData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet&order=date`)
                console.log(videoData)
                setChannelVideo(videoData.items)
                setNextPageToken(videoData.nextPageToken)
            } catch (error) {
                console.log("Error ->", error)
            } finally {
                setLoading(false)
            }
        }
        fetchResults();
    }, [channelId])

    // 더보기
    const loadMoreVideos = async () => {
        if (nextPageToken) {
            const videosData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet%2Cid&order=date&pageToken=${nextPageToken}`)
            setChannelVideo(prevVideos => [...prevVideos, ...videosData.items]);
            setNextPageToken(videosData?.nextPageToken);
        }
    }

    // 로딩
    const channelPageClass = loading ? 'isLoading' : 'isLoaded'

    return (
        <Main
            title="다시보기 유튜버 채널"
            description="다시보기 유튜버 채널 페이지입니다. 다시보기 유튜버의 영상을 모두 확인할 수 있습니다."
        >
            <section id='channelPage' className={channelPageClass}>
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
                        <div className='channel__more'>
                            {nextPageToken && <button onClick={loadMoreVideos}>더보기</button>}
                        </div>
                    </div>
                )}
            </section>
        </Main>
    )
}

export default Channel