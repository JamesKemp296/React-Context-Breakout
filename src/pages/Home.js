import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { MovieContext } from '../contexts/MovieContext'
import { LoadingContext } from '../contexts/LoadingContext'

// MUI stuff
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import CircularProgress from '@material-ui/core/CircularProgress'
import useGlobalStyles from '../styles/globals'
import Copyright from '../components/Copyright'

export default function Home() {
  const classes = useGlobalStyles()

  const [movies, setMovies] = useContext(MovieContext)
  const [loading, setLoading] = useContext(LoadingContext)

  const getRandomMovies = async type => {
    setLoading(true)
    const { data } = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${type}`
    )
    setMovies(data)
    setLoading(false)
  }

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
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => getRandomMovies('comedy')}
                  >
                    10 random comedies
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => getRandomMovies('action')}
                  >
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
          )}
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
    </>
  )
}
