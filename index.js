function justInvoke(fn) {
  x = fn.call()
  return x
}

function setThisWithCall(fn, thisValue, arg) {
 x = fn.call(thisValue)
 x.arguments = [arg]
 return x
}

function setThisWithApply(fn, thisValue, args) {
  x = fn.apply(thisValue, [args[0], args[1]])
  return x
}

function returnNewFunctionOf (functionToBeCopied, thisValue) {
  x = functionToBeCopied.bind(thisValue)
  return x
}