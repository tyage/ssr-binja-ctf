import { connect } from 'react-redux'
import Counter from '../components/Counter'

const mapStateToProps = (state) => {
  return {
    value: state.counter
  }
}

const mapDispatchToProps = {
  onIncrement: () => ({
    type: 'INCREMENT'
  }),
  onDecrement: () => ({
    type: 'DECREMENT'
  })
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default App
