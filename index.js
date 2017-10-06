function justInvoke(fn){
  return fn()
}

function setThisWithCall(fn, thisValue){
  return fn.call(thisValue)
}

function setThisWithApply(fn, thisValue, args){
  return fn.apply(thisValue, args)
}

function returnNewFunctionOf(functionToBeCopies, thisValue){
  return functionToBeCopies.bind(thisValue)
}
