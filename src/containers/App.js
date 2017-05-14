import { connect } from 'react-redux'
import Counter from '../components/Counter'

const mapStateToProps = (state) => {
  return {
    value: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => {
      return {
        type: 'INCREMENT'
      }
    },
    onDecrement: () => {
      return {
        type: 'DECREMENT'
      }
    }
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default App
