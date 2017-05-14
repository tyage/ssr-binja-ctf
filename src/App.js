import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Counter from './components/Counter'

const App = () => (
  <Switch>
    <Route path="/counter/:value" component={Counter} />
    <Redirect from='/' to='/counter/0' />
  </Switch>
)

export default App
