function justInvoke(fn) {
 return fn()
}

function setThisWithCall(fn, thisValue, arg) {
  fn()
  return fn.call(thisValue, arg)
}

function setThisWithApply(fn, thisValue, args) {
  fn()
  return fn.apply(thisValue, args)
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  let copy = functionToBeCopied.bind(thisValue)
  return copy
}