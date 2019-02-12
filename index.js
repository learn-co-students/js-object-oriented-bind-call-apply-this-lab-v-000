//Your code here
function justInvoke(fn) {
  return fn.call(this);
}

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg);
}

function setThisWithApply(fn, thisValue, args) {
  const bob = fn.apply(thisValue, args);
  return bob;
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  let newFunction = functionToBeCopied.bind(thisValue);
  return newFunction;
}
