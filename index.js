//Your code here
function justInvoke(fn){
  return fn.call()
}

function setThisWithCall(fn, value, arg){
  return fn.call(value, arg)
}


function setThisWithApply(fn, value, args){
  return fn.apply(value, args)
}

function returnNewFunctionOf(copy, value){
  return copy.bind(value)
}
