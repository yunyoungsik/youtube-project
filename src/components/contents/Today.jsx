import React from 'react'

import { todayText } from '../../data/today'
import { Link } from 'react-router-dom'

const Today = () => {
    return (
        <section id='today'>
            <div className="today__inner">
                <div className="today__thum video__thumb play__icon">
                    <Link
                        to={`/video/${todayText[0].videoId}`}
                    >
                        <div className="img">
                            <img src={todayText[0].img} alt={todayText[0].title} />
                        </div>
                    </Link>
                </div>
                <div className="today__text">
                    <span className='today'>몰아보기 추천영상</span>
                    <h3 className='title'>
                        <Link to={`/video/${todayText[0].videoId}`}>
                            {todayText[0].title}
                        </Link>
                    </h3>
                    <div className='info'>
                        <span className='author'>
                            <Link to={`/channel/${todayText.channelId}`}>
                                {todayText[0].author}
                            </Link>
                        </span>
                        <span className='date'>{todayText[0].date}</span>
                    </div>
                    <p className='desc'>
                        {todayText[0].desc}
                    </p>
                </div>
            </div>
        </section >
    )
}

export default Today