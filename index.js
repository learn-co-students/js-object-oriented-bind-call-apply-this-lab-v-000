//Your code here

function justInvoke(fn){
  return fn()
}

function setThisWithCall(fn, name, age){
  return fn.call(name, age)
}

function setThisWithApply(fn, name, arg){
  return fn.apply(name, [...arg]);
}

function returnNewFunctionOf(fn, value){
  const copy = fn.bind(value)
  return copy
}
