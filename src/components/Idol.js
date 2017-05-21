import React, { Component } from 'react'
import { withCookies } from 'react-cookie'
import { getIdol } from '../libs/idols'

class Idol extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { idolName, rarity } = this.props.match.params
    const { cookies } = this.props
    const idol = getIdol(idolName, rarity)
    return (
      <div>
        { idol(cookies.get('name')) }
      </div>
    )
  }
}

export default withCookies(Idol)
