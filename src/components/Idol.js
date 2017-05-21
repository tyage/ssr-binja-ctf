import React, { Component } from 'react'
import { getIdol } from '../libs/idols'

class Idol extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { idolName, rarity } = this.props.match.params
    const idol = getIdol(idolName, rarity)
    return (
      <div>
        { idol('producer') }
      </div>
    )
  }
}

export default Idol
