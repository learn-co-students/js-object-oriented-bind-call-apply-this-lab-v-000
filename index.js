function justInvoke(fn) {
  fn()
  return fn()
}

function setThisWithCall(fn, bob, arg) {
  return fn.call(bob, arg)
}

function setThisWithApply(fn, bob, arg) {
  return fn.apply(bob, arg)
}

function returnNewFunctionOf(fn, value) {
  let newFunction = fn.bind(value)
  return newFunction
}
