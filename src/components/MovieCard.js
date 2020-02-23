import React from 'react'
import { Link } from 'react-router-dom'

// MUI stuff
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useGlobalStyles from '../styles/globals'

const MovieCard = ({ movie }) => {
  const classes = useGlobalStyles()

  return (
    <Grid item key={movie} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={'#'}
          title="Movie nane"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            "Movie name"
          </Typography>
          <Typography>Genre: Comedy</Typography>
          <Typography noWrap>"Movie Summary"</Typography>
        </CardContent>
        <CardActions>
          <Link to={`/movie/${movie}`}>
            <Button size="small" color="primary">
              Details
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default MovieCard
