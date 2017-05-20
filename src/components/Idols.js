import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getNewIdol } from '../libs/idols'

class Idols extends Component {
  constructor(props) {
    super(props)
    this.state = {
      idols: []
    }
  }

  onGacha() {
    this.state.idols.push(getNewIdol())
    this.setState({
      idols: this.state.idols
    })
  }

  render() {
    const { idols } = this.state
    const idolList = () => {
      return idols.map(([idolName, rarity], i) => {
        return (
          <li key={i}>
            <Link to={ `/idols/${idolName}/${rarity}` }>
              { `${idolName} (${rarity})` }
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

export default Idols
