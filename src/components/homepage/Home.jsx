import React from 'react'
import './home.css'
import Movie from '../movie/Movie'

const Home = () => {
  return (
    <section className="home">
        <div className="container-home">
            <div className="input-home-movies">
            <input type="text" className='input-home' />
            <button>Cari</button>
            </div>

            <div className="movies">
                <Movie />
            </div>
        </div>
    </section>
  )
}

export default Home