import React, { useState } from 'react'

// MUI stuff
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import CircularProgress from '@material-ui/core/CircularProgress'
import useGlobalStyles from '../styles/globals'

// components
import MovieCard from '../components/MovieCard'

const Movies = () => {
  const classes = useGlobalStyles()
  const [loading, setLoading] = useState(true)
  const movies = [1, 2, 3, 4, 5]

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      {loading ? (
        <div style={{ display: 'grid', placeItems: 'center' }}>
          <CircularProgress size={60} />
        </div>
      ) : (
        <Grid container spacing={4}>
          {movies && movies.map(movie => <MovieCard movie={movie} />)}
        </Grid>
      )}
    </Container>
  )
}

export default Movies
