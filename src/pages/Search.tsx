import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { MovieCard } from '../components/MovieCard'
import { MoviesProps } from './Home'

import { api } from '../services/api'

const apiKey = import.meta.env.VITE_API_KEY

export function Search() {
  const [searchParams] = useSearchParams()
  const [movies, setMovies] = useState<MoviesProps[]>([])
  const query = searchParams.get('q')

  useEffect(() => {
    api(`/search/movie?query=${query}&api_key=${apiKey}`)
      .then(response => {
        setMovies(response.data.results)
      })
  }, [query])

  return (
    <>
      {movies.length ? (
        <div className="mt-32">
          <h2 className="text-white text-4xl mb-4 text-center">
            Results for: <span className="text-yellow-250">{query}</span>
          </h2>
          <div className="flex flex-wrap justify-between p-8 max-w-3.0xl my-0 mx-auto">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                poster_path={movie.poster_path}
                title={movie.title}
                vote_average={movie.vote_average}
                showLink={true}
                posterWidth="w-3/10"
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="h-screen flex items-center justify-center">
          <h2 className="text-white text-4xl text-center">
            No results found for: <span className="text-yellow-250">{query}</span>
          </h2>
        </div>
      )}
    </>
  )
}