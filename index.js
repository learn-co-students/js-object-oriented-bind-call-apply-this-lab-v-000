
function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, thisValue, args) {
  return fn.call(thisValue, args);
}

function setThisWithApply(fn, thisValue, args) {
  return fn.apply(thisValue, [args[0], args[1]]);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  const newFunction = functionToBeCopied.bind(thisValue);
  return newFunction;
}
