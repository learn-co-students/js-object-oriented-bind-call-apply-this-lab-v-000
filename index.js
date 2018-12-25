function justInvoke(cb) {
  return cb()
}

function setThisWithBind(cb, newThis, arg) {
  const boundCB = cb.bind(newThis)
  return boundCB(arg)
}

function setThisWithCall(cb, newThis, arg) {
  return cb.call(newThis, arg)
}

function setThisWithApply(cb, newThis, args) {
  return cb.apply(newThis, args)
}

function returnNewFunctionOf(cb, newThis) {
  return cb.bind(newThis)
}
