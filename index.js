//Your code here
function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg)
}

function setThisWithApply(fn, t, args) {
  return fn.apply(t, args)
}

function returnNewFunctionOf(fn, thisValue) {
  let newFn = fn.bind(thisValue);
  return newFn;
}
