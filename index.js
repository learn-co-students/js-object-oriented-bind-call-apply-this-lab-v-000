function justInvoke(fn) {
  thisValue = function fn() {
     return this
   }
   return fn()
}

function setThisWithCall(fn, value, arg) {
  return fn.call(value, arg)
}

function setThisWithApply(fn,value,args) {
  return fn.apply(value,args)
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  return functionToBeCopied.bind(thisValue)
}
