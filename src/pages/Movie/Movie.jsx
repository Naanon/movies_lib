import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill
} from 'react-icons/bs'

import { MovieCard } from '../../components/MovieCard'

import axios from 'axios'

import './Movie.css'

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

export function Movie() {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)

    const formatCurrency = (number) => {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
    }

    useEffect(() => {
        axios(`${moviesURL}${id}?${apiKey}`).then(response => {
            setMovie(response.data)
        })
    }, [])

    return (
        <div className='movie-page'>
            {movie && (
                <>
                    <MovieCard movie={movie} showLink={false} />
                    <p className="tagline">{movie.tagline}</p>
                    <div className="info">
                        <h3>
                            <BsWallet2 /> Budget:
                        </h3>
                        <p>US{formatCurrency(movie.budget)}</p>
                    </div>
                    <div className="info">
                        <h3>
                            <BsGraphUp /> Box Office:
                        </h3>
                        <p>US{formatCurrency(movie.revenue)}</p>
                    </div>
                    <div className="info">
                        <h3>
                            <BsHourglassSplit /> Running Time:
                        </h3>
                        <p>{movie.runtime} minutes</p>
                    </div>
                    <div className="info description">
                        <h3>
                            <BsFillFileEarmarkTextFill /> Description:
                        </h3>
                        <p>{movie.overview}</p>
                    </div>
                </>
            )}
        </div>
    )
}