import { useState, useEffect } from 'react'
import { MovieCard } from '../components/MovieCard'

import { api } from '../services/api'

// import './MoviesGrid.css'

export type MoviesProps = {
  id?: number
  title?: string
  poster_path?: string
  tagline?: string
  vote_average?: number
  budget?: number
  revenue?: number
  runtime?: number
  overview?: string
  showLink: boolean
  posterWidth: string
}

const apiKey = import.meta.env.VITE_API_KEY

export function Home() {
  const [topMovies, setTopMovies] = useState<MoviesProps[]>([])

  useEffect(() => {
    api(`/movie/top_rated?api_key=${apiKey}`)
      .then(response => {
        setTopMovies(response.data.results)
      })
  }, [])

  return (
    <div>
      <div>
        <h2 className="text-white text-4xl mt-8 mx-0 mb-4 text-center">Best Movies</h2>
        <div className="flex flex-wrap justify-between p-8 max-w-3.0xl my-0 mx-auto">
          {topMovies.length > 0 && topMovies.map((movie) =>
            <MovieCard
              key={movie.id}
              id={movie.id}
              poster_path={movie.poster_path}
              title={movie.title}
              vote_average={movie.vote_average}
              showLink={true}
              posterWidth="w-3/10"
            />
          )}
        </div>
      </div>
    </div>
  )
}