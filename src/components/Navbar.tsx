import { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'

export function Navbar() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    if (!search) return

    navigate(`/search?q=${search}`)
    setSearch('')
  }

  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-black-500 w-full top-0 fixed">
      <h2>
        <Link
          to="/"
          className="flex justify-center items-center gap-2 font-semibold"
        >
          <BiCameraMovie /> Movies Lib
        </Link>
      </h2>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type='text'
          className="rounded border-none py-0.8 px-3.2"
          placeholder='Search Movie'
          onChange={(event) => setSearch(event.target.value)}
          value={search}
        />
        <button
          type='submit'
          className="bg-yellow-250 border-2 border-yellow-250 rounded text-black p-1.2 text-5.2 flex items-center cursor-pointer duration-400 hover:bg-transparent hover:text-yellow-250"
        >
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  )
}