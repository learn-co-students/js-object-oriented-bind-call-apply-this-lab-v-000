function justInvoke(fn){
  return fn();
}

function setThisWithCall(fn, bob, arg){
  return fn.call(bob, arg);
}

function setThisWithApply(fn, thisValue, args){
  return fn.apply(thisValue, args)
}

function returnNewFunctionOf(functionToBeCopied, thisValue){
  return functionToBeCopied.bind(thisValue);
}