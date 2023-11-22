import React, { useEffect, useState } from 'react'

import Today from '../components/contents/Today';
import Youtuber from '../components/contents/Youtuber';
import Main from '../components/section/Main';
import VideoSlider from '../components/video/VideoSlider';
import { fetchFromAPI } from '../utils/api';

const Home = () => {
    const [channelVideo, setChannelVideo] = useState([]);
    const [channelVideo2, setChannelVideo2] = useState([]);
    const [channelVideo3, setChannelVideo3] = useState([]);
    const [channelVideo4, setChannelVideo4] = useState([]);
    const [channelVideo5, setChannelVideo5] = useState([]);

    useEffect(() => {
        const v1 = 'UCaHGOzOyeYzLQeKsVkfLEGA'; //지무비
        const v2 = 'UCpcft4FJXgUjnxWoQYsl7Ug'; // 고몽
        const v3 = 'UC79hJz6y1EEiIkwfHOuWC4w'; // 김시선
        const v4 = 'UCMguxwveCsLVpyKrLz-EFTg'; // 달빛뮤즈
        const v5 = 'UCxlv4aOnrRTXMRSL8bVJqEw'; // 삐맨

        const fetchResults = async () => {
            try {
                const videosData = await fetchFromAPI(`search?channelId=${v1}&part=snippet&order=date`)
                setChannelVideo(videosData.items)

                const videosData2 = await fetchFromAPI(`search?channelId=${v2}&part=snippet&order=date`)
                setChannelVideo2(videosData2.items)

                const videosData3 = await fetchFromAPI(`search?channelId=${v3}&part=snippet&order=date`)
                setChannelVideo3(videosData3.items)

                const videosData4 = await fetchFromAPI(`search?channelId=${v4}&part=snippet&order=date`)
                setChannelVideo4(videosData4.items)

                const videosData5 = await fetchFromAPI(`search?channelId=${v5}&part=snippet&order=date`)
                setChannelVideo5(videosData5.items)

                // console.log(videosData);
            } catch (error) {
                console.log("Error fetching data ->", error)
            }
        }
        fetchResults();
    }, [])

    return (
        < Main
            title="다시보기 유튜버"
            description="다시보기 유튜버 모음 사이트에 오신것을 환영합니다."
        >
            <Today />
            <Youtuber />
            <VideoSlider videos={channelVideo} title='지무비 최신 영상' name='v1' />
            <VideoSlider videos={channelVideo2} title='고몽 최신 영상' name='v2' />
            <VideoSlider videos={channelVideo3} title='김시선 최신 영상' name='v3' />
            <VideoSlider videos={channelVideo4} title='달빛뮤즈 최신 영상' name='v4' />
            <VideoSlider videos={channelVideo5} title='삐맨 최신 영상' name='v5' />
        </ Main >
    )
}

export default Home