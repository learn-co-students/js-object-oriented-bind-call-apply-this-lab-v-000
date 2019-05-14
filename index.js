//Your code here
function justInvoke(fn) {
     return fn()
 }

  function setThisWithCall(fn, thisValue, argument) {
     return fn.call(thisValue,argument)
 }

  function setThisWithApply(fn,thisValue,arguments) {
     return fn.apply(thisValue,arguments)
 }

  function returnNewFunctionOf(fn,thisValue) {
     const newFn = fn.bind(thisValue);
     return newFn
 } 