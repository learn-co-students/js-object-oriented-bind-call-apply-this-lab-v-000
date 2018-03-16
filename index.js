

function justInvoke(fn) {
  return fn()
}

function setThisWithCall(fn, name, age) {
  return fn.call(name, age)
}

function setThisWithApply(fn, name, arr) {
  return fn.apply(name, arr)
}

function returnNewFunctionOf(fn, name) {
  return fn.bind(name)
}
