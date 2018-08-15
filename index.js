//Your code here
function justInvoke(fn) {
  //debugger;
  return fn();
}

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg);
}

function setThisWithApply(fn, thisValue, args) {
  return fn.apply(thisValue, args);
}

function returnNewFunctionOf(functionToBeCopied, thisValue){
  return functionToBeCopied.bind(thisValue);
}
