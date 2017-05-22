import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withCookies } from 'react-cookie'
import { getRandomIdol, unserializeIdols, serializeIdols } from '../libs/idols'

class Idols extends Component {
  constructor(props) {
    super(props)

    const { cookies } = this.props
    this.state = {
      idols: unserializeIdols(cookies.get('idols'))
    }
  }

  onGacha() {
    const { cookies } = this.props

    this.state.idols.push(getRandomIdol({
      producerName: cookies.get('username')
    }))
    cookies.set('idols', serializeIdols(this.state.idols))
    this.setState({
      idols: this.state.idols
    })
  }

  render() {
    const { idols } = this.state
    const idolList = () => {
      return idols.map((idol, i) => {
        return (
          <li key={i}>
            <Link to={ `/idols/${i}` }>
              { `${idol.idolName} (${idol.rarity})` }
            </Link>
          </li>
        )
      })
    }

    return (
      <div>
        <button onClick={this.onGacha.bind(this)}>
          Get a new idol!
        </button>
        <ul>
          { idolList() }
        </ul>
      </div>
    )
  }
}

export default withCookies(Idols)
