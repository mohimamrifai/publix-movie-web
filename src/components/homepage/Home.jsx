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
            <h1>Film Favorite</h1>
                <Movie linkApi="http://www.omdbapi.com/?s=harry+potter&apikey=3a6c317e" duration={2500}/>
            </div>
            <div className="movies">
            <h1>Most Views</h1>
                <Movie linkApi="http://www.omdbapi.com/?s=avenger&apikey=3a6c317e" duration={5000}/>
            </div>
            <div className="movies">
            <h1>most popular last month</h1>
                <Movie linkApi="http://www.omdbapi.com/?s=war&apikey=3a6c317e" duration={7000}/>
            </div>
            <div className="movies">
            <h1>Recomended</h1>
                <Movie linkApi="http://www.omdbapi.com/?s=ships&apikey=3a6c317e" duration={8000}/>
            </div>
            <div className="movies">
            <h1>Last week's best rating</h1>
                <Movie linkApi="http://www.omdbapi.com/?s=spy&apikey=3a6c317e" duration={9000}/>
            </div>
        </div>
    </section>
  )
}

export default Home