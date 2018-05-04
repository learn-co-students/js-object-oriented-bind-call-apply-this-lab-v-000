function justInvoke(fn) {
  return fn()
}

function setThisWithCall(fn, thisValue, arg) {
const bob = fn.call(thisValue, arg)
return bob
}

function setThisWithApply(fn, thisValue, args) {
  const bob = fn.apply(thisValue, args)
  return bob
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  const newFunction = functionToBeCopied.bind(thisValue)
  return newFunction
}
