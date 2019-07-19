//Your code here
function justInvoke(fn) {
  return fn();
}
function setThisWithCall(fn, val, arg) {
  return fn.call(val, arg);
}
function setThisWithApply(fn, val, arg) {
  return fn.apply(val, arg);
}
function returnNewFunctionOf(fn, val) {
  return fn.bind(val);
}
