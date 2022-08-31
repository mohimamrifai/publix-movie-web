import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import {Autoplay} from 'swiper'

// Import Swiper styles
import 'swiper/css';

const Movie = ({linkApi, duration}) => {


    const [datas, setDatas] = useState([]);

    const getMovies = async () => {
    
        await fetch(linkApi)
        .then(res => res.json())
        .then(res => setDatas(res.Search))
    }


    useEffect(() => {
        getMovies()
    }, [])



  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={6}
      loop={true}
      autoplay={{
          delay: duration,
          disableOnInteraction: false,
        }}
      modules={[Autoplay]}
        >
        {datas.map((data, index)=> (
            <SwiperSlide   key={index}>
            <div className="movie">
            <img src={data.Poster} alt="" />
            </div>
            </SwiperSlide>
        ))}
      
    </Swiper>
  )
}

export default Movie


