import React, { Component } from 'react'

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
      return idols.map((idol) => {
        return (
          <li>
            { idol }
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
