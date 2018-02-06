
function justInvoke(fn){
  return fn()
}

function setThisWithCall(cb, thisValue, arg){
  return cb.call(thisValue, arg)
}

function setThisWithApply(cb, thisValue, args){
  return cb.apply(thisValue, args)
}

function returnNewFunctionOf(functionToBeCopied, thisValue){
  return functionToBeCopied.bind(thisValue)
}