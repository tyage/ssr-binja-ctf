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
      <div className="login-form">
        <h2>Please login</h2>

        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="form-group row">
            <label htmlFor="username" className="col-sm-4 col-form-label">Username</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" id="username" placeholder="username" ref={(input) => this.username = input} required />
            </div>
          </div>
          <button type="submit" className="btn btn-lg btn-primary btn-block">Login</button>
        </form>
      </div>
    )
  }
}

export default withCookies(Login)
