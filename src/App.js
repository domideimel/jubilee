import React from 'react'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Hero from './components/Hero'
import Navigation from './components/Navigation'
import Year from './components/Year'
import Chronik from './components/Chronik'
import Anmeldung from './components/Anmeldung'
import Footer from './components/Footer'

const App = () => {
  return (<div id={'top'}>
    <Router>
      <Navigation />
      <Switch>
        <Route path="/">
          <Hero />
          <Year />
          <Chronik />
          <Anmeldung />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </div>)
}

export default App
