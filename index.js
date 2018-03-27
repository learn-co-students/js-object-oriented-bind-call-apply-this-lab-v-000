function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, returnThis, thisValue) {
  return fn.call(returnThis, thisValue);
}

function setThisWithApply(fn, thisValue, args) {
  return fn.apply(thisValue, args);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  return functionToBeCopied.bind(thisValue);
}