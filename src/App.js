import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { CookiesProvider } from 'react-cookie';
import { Link } from 'react-router-dom'
import { Login, Idols, Idol } from './components'

const App = ({ cookies }) => (
  <CookiesProvider cookies={cookies}>
    <div>
      <header id="app-header">
        <ul>
          <li><Link to={ `/login` }>login</Link></li>
          <li><Link to={ `/idols` }>check your idols!</Link></li>
        </ul>
      </header>
      <div id="app-contents">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/idols/:id/:action" component={Idol} />
          <Route path="/idols/:id" component={Idol} />
          <Route path="/idols" component={Idols} />
        </Switch>
      </div>
      <footer id="app-footer"></footer>
    </div>
  </CookiesProvider>
)

export default App
