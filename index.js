function justInvoke(fn){
  return fn()
}


function setThisWithCall(fn, thisValue, arg){
  let bob = {name: 'bob'}
  let age = 18
  this.arg = age
  this.thisValue = thisValue
   return fn.call(thisValue, arg)
}

function setThisWithApply(fn, thisValue, args){
  return fn.apply(thisValue, args)
}

function returnNewFunctionOf(functionToBeCopied, thisValue){
  let newFunction = functionToBeCopied.bind(thisValue)
  return newFunction
}
