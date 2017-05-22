import React, { Component } from 'react'
import { withCookies } from 'react-cookie'
import { getIdol } from '../libs/idols'

class Idol extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { id } = this.props.match.params
    const { cookies } = this.props
    const idol = getIdol(idolName, rarity, {
      producerName: cookies.get('username')
    })
    return (
      <div>
        { idol[action]() }
      </div>
    )
  }
}

export default withCookies(Idol)
