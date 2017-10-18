function justInvoke(x) {
  return x()
}

function setThisWithCall(x, thisValue, argument) {
  return x.call(thisValue, argument)
}

function setThisWithApply(x, thisValue, argument) {
  return x.apply(thisValue, argument)
}

function returnNewFunctionOf(x, thisValue) {
  return x.bind(thisValue)
}
