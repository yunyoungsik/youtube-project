import React from 'react'

import { todayText } from '../../data/today'

const Today = () => {
    return (
        <section id='today'>
            <div className="today__inner">
                <div className="today__thum">
                    <div className="img">
                        <img src={todayText[0].img} alt="" />
                    </div>
                </div>
                <div className="today__text">
                    <span className='today'>몰아보기 추천영상</span>
                    <h3 className='title'>{todayText[0].title}</h3>
                    <div className='info'>
                        <span className='author'>{todayText[0].author}</span>
                        <span className='date'>{todayText[0].date}</span>
                    </div>
                    <p className='desc'>
                        {todayText[0].desc}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Today