//Your code here
function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg);
}

function setThisWithApply(fn, thisValue, args) {
  return fn.apply(thisValue, [args[0], args[1]])
}

//can also do:
//function setThisWithApply(fn, thisValue, args) {
//return fn.apply(thisValu, args)
// }

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  const copy = functionToBeCopied.bind(thisValue);
  return copy;
}
