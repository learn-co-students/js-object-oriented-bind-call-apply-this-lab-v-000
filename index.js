//Your code here

//calls and returns the function as a callback
function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue,arg);
}

function setThisWithApply(fn, thisValue, arg){
  return fn.apply(thisValue,arg);
}

function returnNewFunctionOf(functionToBeCopied, thisValue){
  const copy = functionToBeCopied.bind(thisValue);
  return copy;
}
