//Your code here
function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, thisValue, arg) {
 const result = fn.call(thisValue, arg)
 return result;
}

function setThisWithApply(fn, thisValue, arg) {
  const result = fn.apply(thisValue, [...arg])
  return result;
}

function returnNewFunctionOf(functionToBeCopied, thisValue){
  const result = functionToBeCopied.bind(thisValue);
  return result;
}