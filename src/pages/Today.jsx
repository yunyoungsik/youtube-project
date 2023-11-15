import React from 'react'

import { todayText } from '../data/today'

const Today = () => {
    return (
        <section id='todayPage'>
            {todayText.map((today, key) => (
                <div className="today__inner" key={key}>
                    <div className="today__thum">
                        <div className="img">
                            <img src={today.img} alt="" />
                        </div>
                    </div>
                    <div className="today__text">
                        <span className='today'>몰아보기 추천영상</span>
                        <h3 className='title'>{today.title}</h3>
                        <div className='info'>
                            <span className='author'>{today.author}</span>
                            <span className='date'>{today.date}</span>
                        </div>
                        <p className='desc'>
                            {today.desc}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Today