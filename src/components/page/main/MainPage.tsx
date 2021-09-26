import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import MainSite from '../../elements/MainSite'
import FruitAndVege from '../../elements/FruitAndVege'

const MainPage = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/main'>
          <MainSite />
        </Route>
        <Route exact path='/main/:id'>
          <FruitAndVege />
        </Route>
      </Switch>
    </Router>
  )
}

export default MainPage
