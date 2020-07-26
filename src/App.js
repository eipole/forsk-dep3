import React, { useState} from 'react'
import SearchPage from './pages/searchpage'
import MoviePage from './pages/moviepage'
import HomePage from './pages/homepage'
import {Route, Switch} from 'react-router-dom'
import Theme from './styles/colors'

// const MovieContext = createContext([])

function App() {
  const [movie, setMovie] = useState([])



  return (
    <Theme>
    <div>
    <Switch>
      <Route exact path="/" ><HomePage/></Route>
      <Route path="/search" >
        <SearchPage setMovie={setMovie} movie={movie} />
        </Route>
      <Route path="/display" >
        <MoviePage movie={movie} />
      </Route>
    </Switch>
    </div>
    </Theme>
  )
}

export default App;
