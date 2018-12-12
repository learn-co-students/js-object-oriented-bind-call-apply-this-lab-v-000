//Your code here
function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, value, arg) {
  return fn.call(value, arg);
}

function setThisWithApply(fn, value, arg) {
  return fn.apply(value, arg);
}

function returnNewFunctionOf(fn, value) {
  return fn.bind(value);
}
