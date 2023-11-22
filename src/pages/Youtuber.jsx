import React from 'react'
import { FcFilmReel } from "react-icons/fc";
import { youtuberText } from '../data/youtuber'
import { Link } from 'react-router-dom';
import Main from '../components/section/Main';

const Youtuber = () => {
    return (
        <Main
            title="다시보기 유튜버"
            description="다시보기 유튜버 페이지입니다. 다시보기 유튜버를 확인할 수 있습니다."
        >
            <section id='youtuberPage'>
                <h2><FcFilmReel />몰아보기 유튜버</h2>
                <div className='youtuber__inner'>
                    {youtuberText.map((youtuber, key) => (
                        <div className='youtuber play__icon' key={key}>
                            <div className='youtuber__img'>
                                <Link to={`/channel/${youtuber.channelId}`}>
                                    <img src={youtuber.img} alt={youtuber.author} />
                                </Link>
                            </div>
                            <div className='youtuber__info'>{youtuber.author}</div>
                        </div>
                    ))}
                </div>
            </section>
        </Main>
    )
}

export default Youtuber