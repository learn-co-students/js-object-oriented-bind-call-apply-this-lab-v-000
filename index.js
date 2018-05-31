function justInvoke(func) {
  return func();
}

function setThisWithCall(func, thisValue, arg) {
  return func.call(thisValue, arg);
}

function setThisWithApply(func, thisValue, args) {
  return func.apply(thisValue, args);
}

function returnNewFunctionOf(func, thisValue) {
  let newFunc = func.bind(thisValue)
  return newFunc
}
