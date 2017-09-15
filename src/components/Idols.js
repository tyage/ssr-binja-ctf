import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withCookies } from 'react-cookie'
import { getRandomIdol, unserializeIdols, serializeIdols } from '../libs/idols'

class Idols extends Component {
  constructor(props) {
    const { cookies } = props

    super(props)

    this.state = {
      idols: unserializeIdols(cookies.get('idols'))
    }
  }

  onGacha() {
    const { cookies } = this.props

    this.state.idols.push(getRandomIdol())
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
              { idol.name }
            </Link>
          </li>
        )
      })
    }

    return (
      <div>
        <button onClick={this.onGacha.bind(this)} className="btn btn-primary">
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
