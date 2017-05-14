import React from 'react'
import { Switch, Route } from 'react-router'
import Home from './components/Home'

const App = () => (
  <Switch>
    <Route path="/" component={Home} />
  </Switch>
)

export default App
