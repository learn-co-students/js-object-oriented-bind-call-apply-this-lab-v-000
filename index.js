//Your code here
function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, thisVal, arg) {
  return fn.call(thisVal, arg);
}

function setThisWithApply(fn, thisVal, args) {
  return fn.apply(thisVal, [...args]);
}

function returnNewFunctionOf(copyMe, thisVal) {
  return copyMe.bind(thisVal);
}
