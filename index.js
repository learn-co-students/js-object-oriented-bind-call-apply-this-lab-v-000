returnsThisAndArgs = function(){ return {thisValue: this, arguments: Array.from(arguments)} }
bob = {name: 'bob'}
age = 18

function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg);
}

function setThisWithApply(fn, thisValue, args) {
  return fn.apply(thisValue, args);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  const copyFunction = functionToBeCopied.bind(thisValue);
  return copyFunction;
}
