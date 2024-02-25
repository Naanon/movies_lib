import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

import { MoviesProps } from '../pages/Home'

const imageUrl = import.meta.env.VITE_IMG

export function MovieCard({ ...rest }: MoviesProps) {
  return (
    <div className={`${rest.posterWidth} text-white text-center mb-10 flex flex-col justify-between bg-black-400 p-4 rounded-xl`}>
      <img className="mb-6 max-w-full" src={imageUrl + rest.poster_path} alt={rest.title} />
      <h2 className="mb-4 text-4xl">{rest.title}</h2>
      <p className="mb-4 flex items-center justify-center gap-1.6">
        <FaStar className="text-2xl text-yellow-250" /> {rest.vote_average}
      </p>
      {rest.showLink && (
        <Link
          to={`/movie/${rest.id}`}
          className="bg-yellow-250 border-2 border-yellow-250 rounded text-black py-4 items-center duration-400 font-semibold hover:bg-transparent hover:text-yellow-250"
        >
          Details
        </Link>
      )}
    </div>
  )
}