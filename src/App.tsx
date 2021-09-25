import React, { ReactElement, useState } from 'react'
import LandingPage  from './components/LandingPage'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'


const App= (): ReactElement => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <LandingPage />
          </Route>
          <Route exact path='/home'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
