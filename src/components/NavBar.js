import React, { useContext, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import { fade, makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'

import { MovieContext } from '../contexts/MovieContext'
import { LoadingContext } from '../contexts/LoadingContext'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(1)
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200
      }
    }
  }
}))

export default function SearchAppBar() {
  const classes = useStyles()
  const [movies, setMovies] = useContext(MovieContext)
  const [loading, setLoading] = useContext(LoadingContext)

  const [search, setSearch] = useState('')

  const handleInputChange = e => {
    setSearch(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    const { data } = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${search}`
    )
    setMovies(data)
    setSearch('')
    setLoading(false)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className="navbar">
        <Toolbar className={classes.navbar}>
          <Link to="/" className={classes.title}>
            <Typography variant="h5" style={{ fontWeight: 'bold' }}>
              Wyn-Flix
            </Typography>
          </Link>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <form onSubmit={handleSubmit}>
              <InputBase
                onChange={handleInputChange}
                value={search}
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </form>
          </div>
          <Link to="/about">
            <Button color="inherit">About</Button>
          </Link>
          <Link to="/movies">
            <Button color="inherit">Movies</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}
