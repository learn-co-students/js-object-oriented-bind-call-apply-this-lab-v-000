function justInvoke(fn) {
  return fn();
};

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg);
};

function setThisWithApply(fn, thisValue, arg) {
  return fn.apply(thisValue, [arg[0], arg[1]]);
};

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  return functionToBeCopied.bind(thisValue);
};
