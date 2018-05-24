function justInvoke(fn) {
  return fn();
};

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg);
};

function setThisWithApply(fn, thisValue, args) {
  return fn.apply(thisValue, args);
};

function returnNewFunctionOf(fn, thisValue, arg) {
  const newCopy = fn.bind(thisValue);
  return newCopy;
};
