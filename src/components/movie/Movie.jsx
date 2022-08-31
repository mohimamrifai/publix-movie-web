import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Movie = () => {

    const [datas, setDatas] = useState([]);


    const getMovies = async () => {
        
        const resp = await fetch('https://imdb-api.com/en/API/Top250Movies/k_sk6ojr5f')
        .then(res => res.json())
        .then(res => setDatas(res.items))
    }


    useEffect(() => {
        getMovies()
    }, [])

    console.log(datas)



  return (
    <>
        {datas.map((data, index) => (
            index < 20 ? <div className="movie" key={index}>
                <img src={data.image} alt="" />
                <div className="title">{data.title}</div>
                <p>{data.crew}</p>
            </div> : false 
        ))}
    </>
  )
}

export default Movie