// justInvoke(fn): The function simply invokes the function passed through to it.
// It also returns the return value of the passed through function.

function justInvoke(foot) {
  return foot();
}

function setThisWithCall(fn, thisValue, argument) {
  return fn.call(thisValue, argument);
}

function setThisWithApply(fn, thisValue, args) {
  return fn.apply(thisValue, args);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  const copy = functionToBeCopied.bind(thisValue);
  return copy;
}

// returnNewFunctionOf(functionToBeCopied, thisValue): Here, we ask you to write a
// function that returns a copy of the function passed through, but sets the this
// value of the function's copy.
