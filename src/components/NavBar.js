import React from 'react'
import { Link } from 'react-router-dom'
import { withCookies } from 'react-cookie';
import { isAuthenticated } from '../libs/auth'

const NavBar = ({ cookies }) => (
  <header className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <Link to="/" className="navbar-brand">SSR - Get Super Super Rare Idol!</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#globalHeaderNav" aria-controls="globalHeaderNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="globalHeaderNav">
      <ul className="navbar-nav mr-auto">
        { isAuthenticated(cookies) ? (
            <li className="nav-item">
              <Link to="/logout" className="nav-link">Logout</Link>
            </li>
          ) : (
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
          )
        }
        <li className="nav-item">
          <Link to="/idols" className="nav-link">Check your idols!</Link>
        </li>
      </ul>
    </div>
  </header>
)

export default withCookies(NavBar)
