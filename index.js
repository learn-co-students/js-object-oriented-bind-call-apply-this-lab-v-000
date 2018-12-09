//Your code here

justInvoke = (fN) => {
  return fN()
}

setThisWithCall = (fN, thisValue, arg) => {
  return fN.call(thisValue, arg)
}

setThisWithApply = (fN, thisValue, args) => {
  return fN.apply(thisValue, args)
}

returnNewFunctionOf = (fN, thisValue) => {
  var copy = fN.bind(thisValue)
  return copy

}
