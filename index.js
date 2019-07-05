function justInvoke(fn) {
  return fn()
}

function setThisWithCall(fn, thisValue, arg) {

  return fn.call(thisValue, arg)
}

function setThisWithApply(fn, thisValue, args) {
  return fn.apply(thisValue, Array.from(args))
}

function returnNewFunctionOf (functionToBeCopied, thisValue) {
  const holding = functionToBeCopied.bind(thisValue);
  return holding
}