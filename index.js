function justInvoke(callback){
    return callback.call(window)
}
function setThisWithCall(callback, scope, value){
  return callback.call(scope, value)
}
function setThisWithApply(callback, scope, args){
  return callback.apply(scope, args)
}
function returnNewFunctionOf(callback, fred){
  return function(){ return callback.apply(fred) }.bind(fred)
}
