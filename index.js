function justInvoke(fn) {
  return fn()
}

function setThisWithCall(fn, tValue, arg) {
  return fn.call(tValue, arg)
}

function setThisWithApply(fn, tValue, args) {
  return fn.apply(tValue, args)
}

function returnNewFunctionOf(fn, tValue) {
  return fn.bind(tValue)
}
