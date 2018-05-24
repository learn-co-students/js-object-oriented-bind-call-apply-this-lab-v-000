justInvoke = function(fn){
  return fn();
};

setThisWithCall = function(fn, thisValue, arg) {
  return fn.call(thisValue, arg);
}

setThisWithApply = function(fn, thisValue, args){
  return fn.apply(thisValue, args);
}

returnNewFunctionOf = function(functionToBeCopied, thisValue){
  return functionToBeCopied.bind(thisValue);
}
