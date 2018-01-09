function justInvoke(fn) {
  return fn.call(this);
}


function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg);
}

function setThisWithApply(fn, thisValue, args) {
  return fn.apply(thisValue, args);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  let copyFunc = functionToBeCopied.bind(thisValue);
  return copyFunc;
}
