import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Anmeldung from './components/Anmeldung'
import Footer from './components/Footer'
import Fotos from './components/Fotos'

import Hero from './components/Hero'
import Navigation from './components/Navigation'
import Year from './components/Year'

const App = () => {
  return (<div id={'top'}>
    <Router>
      <Navigation />
      <Switch>
        <Route path="/">
          <Hero />
          <Year />
          <Anmeldung />
          <Fotos />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </div>)
}

export default App
