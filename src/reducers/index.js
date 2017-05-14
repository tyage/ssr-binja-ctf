export default (state, action) => {
  let counter = state.counter
  switch (action.type) {
    case 'INCREMENT':
      counter += 1
      break
    case 'DECREMENT':
      counter -= 1
      break
    default:
      break
  }
  return { counter }
}
