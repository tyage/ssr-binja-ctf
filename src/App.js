import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { withCookies, CookiesProvider } from 'react-cookie';
import { Link } from 'react-router-dom'
import { Login, Logout, Idols, Idol, NavBar } from './components'
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
      <NavBar />
      <div className="container">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <PrivateRouteWithCookies path="/idols/:id/:action" component={Idol} />
          <PrivateRouteWithCookies path="/idols/:id" component={Idol} />
          <PrivateRouteWithCookies path="/idols" component={Idols} />
          <Redirect from="/" to="/idols" />
        </Switch>
      </div>
    </div>
  </CookiesProvider>
)

export default App
