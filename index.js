function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, value, arg) {
  return fn.call(value, arg);
}

function setThisWithApply(fn, value, args) {
  return fn.apply(value, args);
}

function returnNewFunctionOf(fn, value) {
  const newFn = fn.bind(value);
  return newFn;
}
