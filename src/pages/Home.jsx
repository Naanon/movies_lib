import { useState, useEffect } from 'react'
import { MovieCard } from '../components/MovieCard'

import axios from 'axios'

import './MoviesGrid.css'

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

export function Home() {
    const [topMovies, setTopMovies] = useState([])

    useEffect(() => {
        axios(`${moviesURL}top_rated?${apiKey}`).then(response => {
            setTopMovies(response.data.results)
        })
    }, [])

    return (
        <div>
            <div className="container">
                <h2 className="title">Best Movies</h2>
                <div className="movies-container">
                    {topMovies.length > 0 && topMovies.map((movie) =>
                        <MovieCard key={movie.id} movie={movie} />
                    )}
                </div>
            </div>
        </div>
    )
}