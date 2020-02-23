import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles/'

// components
import NavBar from './components/NavBar'
import Footer from './components/Footer'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Movie from './pages/Movie'
import Movies from './pages/Movies'

// Context
import { MovieProvider } from './contexts/MovieContext'
import { LoadingProvider } from './contexts/LoadingContext'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#000',
      dark: '#002884',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff7961',
      main: '#000',
      dark: '#ba000d',
      contrastText: '#000'
    }
  },
  typography: {
    useNextVariant: true
  }
})

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <MovieProvider>
        <LoadingProvider>
          <CssBaseline />
          <Router>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/movies" component={Movies} />
              <Route path="/movie/:id" component={Movie} />
            </Switch>
            <Footer />
          </Router>
        </LoadingProvider>
      </MovieProvider>
    </MuiThemeProvider>
  )
}

export default App
