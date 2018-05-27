function justInvoke(cb){
  return cb();
}
function setThisWithCall(cb, bob, arg){
  return cb.call(bob, arg);
}
function setThisWithApply(cb, thisObj, args){
  return cb.apply(thisObj, args);
}
function returnNewFunctionOf(cb, thisObj){
  return cb.bind(thisObj);
}
