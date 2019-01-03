//Your code here
function justInvoke(fnc){
  return fnc()
}

function setThisWithCall(fnc, x, n){
  return fnc.call(x, n)
}

function setThisWithApply(fnc, obj, args){
  return fnc.apply(obj, args)
}

function returnNewFunctionOf(fnc, x){
  return fnc.bind(x)
}
