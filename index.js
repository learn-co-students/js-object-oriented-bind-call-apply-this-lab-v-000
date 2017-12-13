function justInvoke(someFunction) {
  return someFunction();
}

function setThisWithCall(someFunction, obj, arg) {
  return someFunction.call(obj, arg);
}

function setThisWithApply(someFunction, obj, args) {
  return someFunction.apply(obj, args);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  return functionToBeCopied.bind(thisValue);
}
