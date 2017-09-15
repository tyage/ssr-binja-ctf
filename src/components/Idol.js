import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withCookies } from 'react-cookie'
import { unserializeIdols } from '../libs/idols'

class Idol extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { id, action } = this.props.match.params
    const { cookies } = this.props

    const idol = unserializeIdols(cookies.get('idols'))[id]
    if (!idol) {
      return <div>Invalid Idol!!</div>
    }

    const idolAction = action || 'say1'
    if (!idol[idolAction]) {
      return <div>Invalid Action!!</div>
    }

    return (
      <div>
        <Link to="/idols">Back to my idols.</Link>

        <div>
          <h2>{ idol.name }</h2>
          <img src={ idol.image } alt="" />
          <p>{ idol[idolAction]() }</p>
          <ul>
            <li><Link to={ `/idols/${id}/say1` }>voice 1</Link></li>
            <li><Link to={ `/idols/${id}/say2` }>voice 2</Link></li>
            <li><Link to={ `/idols/${id}/say3` }>voice 3</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default withCookies(Idol)
