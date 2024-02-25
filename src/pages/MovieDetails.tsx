import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill
} from 'react-icons/bs'

import { MovieCard } from '../components/MovieCard'
import { MoviesProps } from './Home'

import { api } from '../services/api'

const apiKey = import.meta.env.VITE_API_KEY

export function MovieDetails() {
  const { id } = useParams()
  const [movie, setMovie] = useState<MoviesProps>()

  const formatCurrency = (number?: number) => {
    return (
      number?.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      })
    )
  }

  useEffect(() => {
    api(`/movie/${id}?api_key=${apiKey}`).then(response => {
      setMovie(response.data)
    })
  }, [])

  return (
    <div className="text-white flex flex-col max-w-1.5xl mt-32 mb-8 mx-auto">
      {movie && (
        <>
          <MovieCard
            poster_path={movie.poster_path}
            title={movie.title}
            vote_average={movie.vote_average}
            showLink={false}
            posterWidth="w-full"
          />
          <p className="text-center text-5.2 mb-8">{movie.tagline}</p>
          <div className="mb-6">
            <h3 className="mb-4 flex items-center gap-2">
              <BsWallet2 className="text-2xl text-yellow-250" /> Budget:
            </h3>
            <p>US{formatCurrency(movie.budget)}</p>
          </div>
          <div className="mb-6">
            <h3 className="mb-4 flex items-center gap-2">
              <BsGraphUp className="text-2xl text-yellow-250" /> Box Office:
            </h3>
            <p>US{formatCurrency(movie.revenue)}</p>
          </div>
          <div className="mb-6">
            <h3 className="mb-4 flex items-center gap-2">
              <BsHourglassSplit className="text-2xl text-yellow-250" /> Running Time:
            </h3>
            <p>{movie.runtime} minutes</p>
          </div>
          <div>
            <h3 className="mb-4 flex items-center gap-2">
              <BsFillFileEarmarkTextFill className="text-2xl text-yellow-250" /> Description:
            </h3>
            <p className="leading-5.6 text-justify">{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  )
}