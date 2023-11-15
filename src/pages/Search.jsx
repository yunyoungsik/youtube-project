import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import VideoSearch from '../components/video/VideoSearch'
import { fetchFromAPI } from '../utils/api'



const Search = () => {
    const { searchId } = useParams();
    const [videos, setVideos] = useState([]);
    const [nextPageToken, setNextPageToken] = useState(null);


    // useEffect(() => {
    //     fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=48&q=${searchId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
    //         .then(response => response.json())
    //         .then(result => {
    //             console.log(result);
    //             setVideos(result.items);
    //         })
    //         .catch(error => console.log('error', error));
    // }, [searchId])

    useEffect(() => {
        setVideos([]);
        fetchVideos(searchId);
    }, [searchId]);

    const fetchVideos = (query, pageToken = '') => {
        fetchFromAPI(`search?type=video&part=snippet&q=${query}&pageToken=${pageToken}`)
            .then((data) => {
                setNextPageToken(data.nextPageToken);
                setVideos((prevVideos) => [...prevVideos, ...data.items])
                console.log(data.items)
            })
            .catch((error) => {
                console.log("Error fetching data", error);
            })
    }

    // 더보기
    const handleLoadaMore = () => {
        if (nextPageToken) {
            fetchVideos(searchId, nextPageToken);
        }
    }

    return (
        <section id='searchPage'>
            <h2><em>{searchId}</em> 검색 결과</h2>
            <div className='video__inner' >
                <VideoSearch videos={videos} />
            </div>
            <div className='video__more'>
                <button onClick={handleLoadaMore}>더보기</button>
            </div>
        </section>
    )
}

export default Search