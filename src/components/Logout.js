import React from 'react'
import { withCookies } from 'react-cookie'
import { Redirect } from 'react-router'
import { logout } from '../libs/auth'

const Logout = ({ cookies }) => {
  logout(cookies);
  return <Redirect to="/" />
}

export default withCookies(Logout)
