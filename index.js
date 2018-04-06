function justInvoke(fn) {
  return fn()
}

function setThisWithCall(fn, name, numb) {
  return fn.call(name, numb)
}

function setThisWithApply(fn, name, args) {
  return fn.apply(name, args)
}

function returnNewFunctionOf(fn, name) {
  return fn.bind(name)
}
