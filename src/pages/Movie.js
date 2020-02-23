import React from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'

// MUI stuff
// import Button from '@material-ui/core/Button'
// import Card from '@material-ui/core/Card'
// import CardActions from '@material-ui/core/CardActions'
// import CardContent from '@material-ui/core/CardContent'
// import CardMedia from '@material-ui/core/CardMedia'
// import Grid from '@material-ui/core/Grid'
// import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
// import CircularProgress from '@material-ui/core/CircularProgress'

import useGlobalStyles from '../styles/globals'
// import { MovieContext } from '../contexts/MovieContext'
// import { LoadingContext } from '../contexts/LoadingContext'

const Movie = () => {
  const classes = useGlobalStyles()
  // const [movies, setMovies] = useContext(MovieContext)
  // const [loading, setLoading] = useContext(LoadingContext)

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      hello
      {/* {loading ? (
        <div style={{ display: 'grid', placeItems: 'center' }}>
          <CircularProgress size={60} />
        </div>
      ) : (
        <Grid container spacing={4}>
          {movies &&
            movies.map(movie => (
              <Grid item key={movie.show.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={movie.show.image.medium}
                    title={movie.show.name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {movie.show.name}
                    </Typography>
                    <Typography>Genre: {movie.show.genres[0]}</Typography>
                    <Typography noWrap>
                      {movie.show.summary
                        ? movie.show.summary.replace(
                            /(<p[^>]+?>|<p>|<\/p><b[^>]+?>|<b>|<\/b>)/gim,
                            ''
                          )
                        : 'No summary'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to={`/movie/${movie.show.id}`}>
                      <Button size="small" color="primary">
                        Details
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
      )} */}
    </Container>
  )
}

export default Movie
