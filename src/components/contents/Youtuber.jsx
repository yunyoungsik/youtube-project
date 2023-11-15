import React from 'react'
import { Link } from 'react-router-dom'

import { youtuberText } from '../../data/youtuber'
import { FcFilmReel } from "react-icons/fc";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

const Youtuber = () => {
    return (
        <section id='youtuber'>
            <h2><FcFilmReel />몰아보기 유튜버</h2>
            <div className='youtuber__inner'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        400: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        960: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1280: {
                            slidesPerView: 6,
                            spaceBetween: 20,
                        },
                        1600: {
                            slidesPerView: 7,
                            spaceBetween: 20,
                        },
                    }}
                    modules={[Autoplay, Navigation]}

                    className="mySwiper"
                >
                    {youtuberText.map((youtuber, key) => (

                        <SwiperSlide>
                            <div className='youtuber play__icon' key={key}>
                                <div className='youtuber__img'>
                                    <Link to={`/channel/${youtuber.channelId}`}>
                                        <img src={youtuber.img} alt={youtuber.author} />
                                    </Link>
                                </div>
                                <div className='youtuber__info'>{youtuber.author}</div>
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Youtuber