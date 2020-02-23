import React, { useState } from 'react'
import axios from 'axios'
const MovieList = () => {
  const [movies, setMovies] = useState({})

  const getMovies = async () => {
    const { data } = await axios.get(
      'https://api.tvmaze.com/search/shows?q=batman'
    )
    console.log(data)
  }
  return (
    <div>
      <h1>Movie list will go ehrere or sosmdao</h1>
    </div>
  )
}

export default MovieList
