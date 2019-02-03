//Your code here
function justInvoke(fn) {
  return fn()
}

setThisWithCall = function(fn, thisValue, arg) {
  return fn.call(thisValue, arg);
}

setThisWithApply = function(fn, thisValue, args) {
  return fn.apply(thisValue, args);
}

returnNewFunctionOf = function(functionToBeCopied, thisValue) {
  return newFn = functionToBeCopied.bind(thisValue);
}
