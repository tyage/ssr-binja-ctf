import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: parseInt(props.match.params.value, 10)
    }
  }

  onIncrement() {
    this.setState({
      value: this.state.value + 1
    })
  }

  onDecrement() {
    this.setState({
      value: this.state.value - 1
    })
  }

  render() {
    const { value } = this.state
    return (
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={this.onIncrement.bind(this)}>
          +
        </button>
        {' '}
        <button onClick={this.onDecrement.bind(this)}>
          -
        </button>
      </p>
    )
  }
}

export default Counter
