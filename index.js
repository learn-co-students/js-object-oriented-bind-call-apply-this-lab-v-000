//Your code here

function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, thisValue, argument) {
  return fn.call(thisValue, argument);
}
function setThisWithApply(fn, thisValue, someArguments) {
  return fn.apply(thisValue, someArguments);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  return copy = functionToBeCopied.bind(thisValue);
  return copy;
}