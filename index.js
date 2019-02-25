// calls/invokes function
// returns the function's this value as a callback
function justInvoke(fn) {
  return fn();
}

// invokes the function passed through to it
// uses call method to return the function's this value
function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg);
}

// calls and returns the function as a callback
function setThisWithApply(fn, thisValue, args) {
  return fn.apply(thisValue, args);
}

// returns a copy of the function passed through (new function)
// but, sets the 'this' value of the function's copy
function returnNewFunctionOf(functionToBeCopied, thisValue) {
  const copy = functionToBeCopied.bind(thisValue);
  return copy;
}
