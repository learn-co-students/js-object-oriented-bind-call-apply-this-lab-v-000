function justInvoke(fn){
  return fn()
}

function setThisWithCall(fn,bob,arg){
  return fn.call(bob,arg)
}

function setThisWithApply(fn,name,args){
  return fn.apply(name,[...args])
}

function returnNewFunctionOf(fn,name,arg){
  return fn.bind(name,arg)
}
