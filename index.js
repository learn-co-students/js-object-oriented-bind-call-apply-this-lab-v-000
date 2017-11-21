function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, thisValue, arguments) {
  return fn.call(thisValue, arguments);
}

function setThisWithApply(fn, thisValue, arguments) {
  return fn.apply(thisValue, arguments);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  return functionToBeCopied.bind(thisValue);
}
