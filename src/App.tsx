import React, { ReactElement, useState } from 'react'
import LandingPage from '../src/components/page/landing/LandingPage'
import MainPage from '../src/components/page/main/MainPage'
import MainLayout from './components/elements/common/MainLayout'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'


const App= (): ReactElement => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <LandingPage />
          </Route>
          <Route exact path='/main'>
            <MainLayout>
              <MainPage />
            </MainLayout>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
