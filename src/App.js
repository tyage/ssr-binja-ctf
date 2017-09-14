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
      <header className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <Link to="/" className="navbar-brand">SSR - Get Super Super Rare Idol!</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#globalHeaderNav" aria-controls="globalHeaderNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="globalHeaderNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/login" className="nav-link">login</Link>
            </li>
            <li className="nav-item">
              <Link to="/idols" className="nav-link">check your idols!</Link>
            </li>
          </ul>
        </div>
      </header>
      <div className="container">
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRouteWithCookies path="/idols/:id/:action" component={Idol} />
          <PrivateRouteWithCookies path="/idols/:id" component={Idol} />
          <PrivateRouteWithCookies path="/idols" component={Idols} />
          <Redirect from='/' to='/idols'/>
        </Switch>
      </div>
    </div>
  </CookiesProvider>
)

export default App
