import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { MovieCard } from '../components/MovieCard'
import { MoviesProps } from './Home'

// import './MoviesGrid.css'

const searchUrl = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

export function Search() {
  const [searchParams] = useSearchParams()

  const [movies, setMovies] = useState<MoviesProps[]>([])
  const query = searchParams.get('q')

  const getSearchedMovies = async (url: string) => {
    const response = await fetch(url)
    const data = await response.json()

    setMovies(data.results)
  }

  useEffect(() => {
    const searchWithQueryUrl = `${searchUrl}?query=${query}&api_key=${apiKey}`

    getSearchedMovies(searchWithQueryUrl)
  }, [query])

  return (
    <div>
      <h2 className="text-white text-4xl mt-8 mx-0 mb-4 text-center">
        Results for: <span className="text-yellow-250">{query}</span>
      </h2>
      <div className="flex flex-wrap justify-between p-8 max-w-3.0xl my-0 mx-auto">
        {movies.length > 0 && movies.map((movie) =>
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
  )
}