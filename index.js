function justInvoke(fn){
  return fn();
}

function setThisWithCall(fn, value, argument){
  return fn.call(value, argument);
}

function setThisWithApply(fn, value, args){
  return fn.apply(value, args)
}

function returnNewFunctionOf(fn, value){
  return newFn = fn.bind(value)
}
