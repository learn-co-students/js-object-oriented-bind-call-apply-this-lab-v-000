function justInvoke(fn) {
  return fn(this)
}

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg)
}

function setThisWithApply(fn, thisValue, args) {
  return fn.apply(thisValue, args)
}

function returnNewFunctionOf(fn, thisValue) {
  let newFn = fn.bind(thisValue)
  return newFn
}
