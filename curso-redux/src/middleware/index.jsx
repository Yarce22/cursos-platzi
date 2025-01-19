const logger = (store) => (next) => (action) => {
  let result = next(action)
  return result
}

export {logger}
