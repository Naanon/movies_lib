import { useState, useEffect } from 'react'
import { MovieCard } from '../components/MovieCard'

import axios from 'axios'

// import './MoviesGrid.css'

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

export function Home() {
  const [topMovies, setTopMovies] = useState([])

  useEffect(() => {
    axios(`${moviesURL}top_rated?api_key=${apiKey}`).then(response => {
      setTopMovies(response.data.results)
    })
  }, [])

  return (
    <div>
      <div>
        <h2 className="text-white text-4xl mt-8 mx-0 mb-4 text-center">Best Movies</h2>
        <div className="flex flex-wrap justify-between p-8 max-w-3.0xl my-0 mx-auto">
          {topMovies.length > 0 && topMovies.map((movie) =>
            <MovieCard key={movie.id} movie={movie} />
          )}
        </div>
      </div>
    </div>
  )
}