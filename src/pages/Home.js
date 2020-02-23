import React, { useState } from 'react'

// MUI stuff
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import CircularProgress from '@material-ui/core/CircularProgress'
import useGlobalStyles from '../styles/globals'

// components
import MovieCard from '../components/MovieCard'

export default function Home() {
  const classes = useGlobalStyles()
  const movies = [1, 2, 3, 4, 5, 6]
  const [loading, setLoading] = useState(false)

  // getrandommovie goes here
  // `https://api.tvmaze.com/search/shows?q=${type}`

  // useeffect to fetch initial movies

  return (
    <>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Wyn-Flix
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Welcome to Wyn-Flix. This site was created to show the powerful
              capabilities of the react context api. Search for some of your
              favorite movies or TV shows with the TVAmaze api!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    10 random comedies
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    10 random action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
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
      </main>
    </>
  )
}
