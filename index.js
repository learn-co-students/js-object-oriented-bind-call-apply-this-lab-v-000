//Your code here

const justInvoke = function(fn){
  return fn();
};

const setThisWithCall = function(fn, value, arg){
  return fn.call(value, arg);
}

const setThisWithApply = function(fn, thisValue, args){
  return fn.apply(thisValue, args);
}

const returnNewFunctionOf = function(functionToBeCopied, thisValue){
  return hi = functionToBeCopied.bind(thisValue);
}
