//Your code here
function justInvoke(func) {
  return func()
}

function setThisWithCall(func, thisValue, argument) {
  return func.call(thisValue, argument)
}

function setThisWithApply(func, thisValue, argument) {
  return func.apply(thisValue, argument)
}

function returnNewFunctionOf(func, thisValue) {
  const copy = func.bind(thisValue)
  return copy
}
