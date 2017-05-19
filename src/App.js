import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { Login, Idols, Idol } from './components'

const App = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/idols" component={Idols} />
    <Route path="/idols/:type/:index" component={Idol} />
  </Switch>
)

export default App
