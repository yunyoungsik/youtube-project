import React from 'react'

import { todayText } from '../data/today'
import Main from '../components/section/Main'
import { Link } from 'react-router-dom'

const Today = () => {
    return (
        <Main
            title="다시보기 유튜버 투데이"
            description="다시보기 유튜버 투데이 페이지입니다. 다시보기 유튜버의 추천영상과 다시보기 유터버들을 확인할 수 있습니다."
        >
            <section id='todayPage'>
                {todayText.map((today, key) => (
                    <div className="today__inner" key={key}>
                        <div className="today__thum video__thumb play__icon">
                            <Link
                                to={`/video/${today.videoId}`}
                            >
                                <div className="img">
                                    <img src={today.img} alt={today.title} />
                                </div>
                            </Link>
                        </div>
                        <div className="today__text">
                            <span className='today'>몰아보기 추천영상</span>
                            <h3 className='title'>
                                <Link to={`/video/${today.videoId}`}>
                                    {today.title}
                                </Link>
                            </h3>
                            <div className='info'>
                                <span className='author'>
                                    <Link to={`/channel/${todayText.channelId}`}>
                                        {today.author}
                                    </Link>
                                </span>
                                <span className='date'>{today.date}</span>
                            </div>
                            <p className='desc'>
                                {today.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </section>
        </Main>
    )
}

export default Today