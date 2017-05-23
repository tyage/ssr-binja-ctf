import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { withCookies, CookiesProvider } from 'react-cookie';
import { Link } from 'react-router-dom'
import { Login, Idols, Idol } from './components'
import { isAuthenticated } from './libs/auth'

const PrivateRoute = ({ component: Component, cookies, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated(cookies) ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)
const PrivateRouteWithCookies = withCookies(PrivateRoute)

const App = ({ cookies }) => (
  <CookiesProvider cookies={cookies}>
    <div>
      <header id="app-header">
        <h1>SSR - Get Super Super Rare Idol!</h1>
        <ul>
          <li><Link to={ `/login` }>login</Link></li>
          <li><Link to={ `/idols` }>check your idols!</Link></li>
        </ul>
      </header>
      <div id="app-contents">
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRouteWithCookies path="/idols/:id/:action" component={Idol} />
          <PrivateRouteWithCookies path="/idols/:id" component={Idol} />
          <PrivateRouteWithCookies path="/idols" component={Idols} />
          <Redirect from='/' to='/idols'/>
        </Switch>
      </div>
      <footer id="app-footer"></footer>
    </div>
  </CookiesProvider>
)

export default App
