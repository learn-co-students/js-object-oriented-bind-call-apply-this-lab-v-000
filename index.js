function justInvoke (fn) {
  return fn(this.name)
}

function setThisWithCall (fn, thisValue) {
  return fn.call(thisValue)
}

function setThisWithApply (fn, thisValue, args) {
  return fn.apply(thisValue, args)
}

function returnNewFunctionOf (functionToBeCopied, thisValue) {
  return functionToBeCopied.bind(thisValue)
}
