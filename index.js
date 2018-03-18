function justInvoke(fn) {
  return fn()
}

function setThisWithCall(fn, v, a) {
  return fn.call(v, a)
}

function setThisWithApply(fn, v, a) {
  return fn.apply(v, a)
}

function returnNewFunctionOf(fn, t) {
  return fn.bind(t)
}
