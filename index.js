function justInvoke (fn) {
  return fn()
}

function setThisWithCall (arg1, arg2, arg3) {
  return arg1.call(arg2, arg3);
}

function setThisWithApply (arg1, arg2, arr) {
  return arg1.apply(arg2, arr)
}

function returnNewFunctionOf (fn, arg) {
  let newFn = fn.bind(arg)
  return newFn
}
