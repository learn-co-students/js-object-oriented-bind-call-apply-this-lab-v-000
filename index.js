//Your code here
function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, thisValue, argument) {
  return fn.call(thisValue,argument);
}

function setThisWithApply(fn, thisValue, argument) {
  return fn.apply(thisValue, argument);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  return functionToBeCopied.bind(thisValue);
}
