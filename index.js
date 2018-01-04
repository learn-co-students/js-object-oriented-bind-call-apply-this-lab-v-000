function justInvoke(fn) {
  return fn()
  }

function setThisWithCall(fn, obj, int) {
  return fn.call(obj, int)
}

function setThisWithApply(fn, obj, array) {
  return fn.apply(obj, array)
}

function returnNewFunctionOf(fn, thisValue) {
  const newFunction = fn.bind(thisValue);
  return newFunction;
}
