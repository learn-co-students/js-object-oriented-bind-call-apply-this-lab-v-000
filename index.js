function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg);
}

function setThisWithApply(fn, thisValue, arg) {
  return fn.apply(thisValue, arg);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  return functionToBeCopied.bind(thisValue); //function that returns a copy of the function passed through
}
