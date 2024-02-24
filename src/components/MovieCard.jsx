import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

const imageUrl = import.meta.env.VITE_IMG

export function MovieCard({ movie, showLink = true, width = "w-3/10" }) {
  return (
    <div className={`${width} text-white text-center mb-10 flex flex-col justify-between bg-black-400 p-4 rounded-xl`}>
      <img className="mb-6 max-w-full" src={imageUrl + movie.poster_path} alt={movie.title} />
      <h2 className="mb-4 text-4xl">{movie.title}</h2>
      <p className="mb-4 flex items-center justify-center gap-1.6">
        <FaStar className="text-2xl text-yellow-250" /> {movie.vote_average}
      </p>
      {showLink && (
        <Link
          to={`/movie/${movie.id}`}
          className="bg-yellow-250 border-2 border-yellow-250 rounded text-black py-4 items-center duration-400 font-semibold hover:bg-transparent hover:text-yellow-250"
        >
          Details
        </Link>
      )}
    </div>
  )
}