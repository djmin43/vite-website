import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import MainSite from '../../elements/MainSite'

const MainPage = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/main/'>
          <MainSite />
        </Route>
      </Switch>
    </Router>
  )
}

export default MainPage
