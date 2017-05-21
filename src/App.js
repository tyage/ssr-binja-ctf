import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { Login, Idols, Idol } from './components'
import { CookiesProvider } from 'react-cookie';

const App = ({ cookies }) => (
  <CookiesProvider cookies={cookies}>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/idols/:idolName/:rarity" component={Idol} />
      <Route path="/idols" component={Idols} />
    </Switch>
  </CookiesProvider>
)

export default App
