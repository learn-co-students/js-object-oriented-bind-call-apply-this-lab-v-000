function justInvoke(fn){
  return fn();
}

function setThisWithCall(fn, thisValue, arg){
  return fn.call(thisValue, arg);
}


function setThisWithApply(fn, thisValue, diffArgs){
  return fn.apply(thisValue, diffArgs);
}

function returnNewFunctionOf(functionToBeCopied, thisValue){
  const newFn = functionToBeCopied.bind(thisValue);
  return newFn;
}
