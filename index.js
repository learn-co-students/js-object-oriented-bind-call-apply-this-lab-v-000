function justInvoke(fn) {
  return fn()
}

function setThisWithCall(fn, dis, args) {
  return fn.call(dis, args)
}

function setThisWithApply(fn, dis, args) {
  return fn.apply(dis, args)
}

function returnNewFunctionOf(fn, dis) {
  return fn.bind(dis)
}
