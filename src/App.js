import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import About from './pages/About'
import Movie from './pages/Movie'
import Movies from './pages/Movies'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movies" component={Movies} />
        <Route path="/movies/:id" component={Movie} />
      </Switch>
    </Router>
  )
}

export default App
