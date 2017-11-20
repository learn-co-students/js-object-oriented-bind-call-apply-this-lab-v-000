const justInvoke = (fn) => fn();

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg);
}

const setThisWithApply = function(fn, thisValue, args) {
  return fn.apply(thisValue, args);
}

const returnNewFunctionOf = function(fn, thisValue) {
  return fn.bind(thisValue);
}