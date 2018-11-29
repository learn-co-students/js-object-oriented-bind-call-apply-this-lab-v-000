//Your code here
function justInvoke(passedFunction){
  return passedFunction()
}

function setThisWithCall(passedFunction, thisValue, arg){
  return passedFunction.call(thisValue, arg)
}

function setThisWithApply(passedFunction, thisValue, args){
  return passedFunction.apply(thisValue, args)
}

function returnNewFunctionOf(functionToBeCopied, thisValue){
  const newFunction = functionToBeCopied.bind(thisValue)
  return newFunction
}
