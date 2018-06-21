function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, thisValue, arg){
  return fn.call(thisValue, 18);
}


function setThisWithApply(fn, thisValue, arg){
  return fn.apply(thisValue, arg);
}

function returnNewFunctionOf(functionToBeCopied, thisValue){
    return functionToBeCopied.bind(thisValue); 

}
