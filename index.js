function justInvoke(fn) {
   return x = fn();
}

 function setThisWithCall(fn, thisValue, arg) {
   return x = fn.call(thisValue, arg)
 }

function setThisWithApply(fn, thisValue, arg) {
  return x = fn.apply(thisValue, arg)
}

function returnNewFunctionOf(fn, thisValue) {
  const copyFn = fn.bind(thisValue);
  return copyFn
}
