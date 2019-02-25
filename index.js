//Your code here
function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, thisValue, argument) {
  return fn.call(thisValue, argument);
}

function setThisWithApply(fn, thisValue, [argOne, argTwo]) {
  return fn.apply(thisValue, [argOne, argTwo]);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  const newFn = functionToBeCopied.bind(thisValue);
  return newFn;
}
