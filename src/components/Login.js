import React, { Component } from 'react'
import { withCookies } from 'react-cookie'
import { Redirect } from 'react-router-dom'
import { login } from '../libs/auth'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirectToReferrer: false
    }
  }

  onSubmit() {
    const { cookies } = this.props
    const username = this.username.value

    login(cookies, username)
    this.setState({
      redirectToReferrer: true
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return <Redirect to={from} />
    }

    return (
      <div>
        <p>Please input an username and login</p>

        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref={(input) => this.username = input} />
          <button>Login</button>
        </form>
      </div>
    )
  }
}

export default withCookies(Login)
