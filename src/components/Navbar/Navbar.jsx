import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'

import './Navbar.css'

export function Navbar() {
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!search) return

        navigate(`/search?q=${search}`)
        setSearch('')
    }

    return (
        <nav id="navbar">
            <h2>
                <Link to="/"><BiCameraMovie /> Movies Lib</Link>
            </h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Search Movie'
                    onChange={(event) => setSearch(event.target.value)}
                    value={search}
                />
                <button type='submit'>
                    <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    )
}