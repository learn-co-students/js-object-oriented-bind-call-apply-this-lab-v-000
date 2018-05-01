
function justInvoke(args) {
  return args();
}

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg)
}

function setThisWithApply(fn, thisValue, arg) {
  return fn.apply(thisValue, arg)
}

function returnNewFunctionOf(fn, value) {
  return fn.bind(value);
}