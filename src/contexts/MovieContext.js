import React, { useState, createContext, useEffect } from 'react'
import axios from 'axios'
export const MovieContext = createContext()

export const MovieProvider = props => {
  const [movies, setMovies] = useState(null)
  const [loading, setLoading] = useState(false)

  const getRandomMovies = async type => {
    const { data } = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${type}`
    )
    setMovies(data)
  }

  useEffect(() => {
    getRandomMovies('batman')
  }, [])

  return (
    <MovieContext.Provider value={([loading, setLoading], [movies, setMovies])}>
      {props.children}
    </MovieContext.Provider>
  )
}
