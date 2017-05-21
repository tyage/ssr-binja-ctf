import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { Login, Idols, Idol } from './components'

const App = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/idols/:idolName/:rarity" component={Idol} />
    <Route path="/idols" component={Idols} />
  </Switch>
)

export default App
