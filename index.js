//Your code here
function justInvoke(fn){
  return fn();
}

function setThisWithCall(fn, arg, age){
  return fn.call(arg,age);
}

function setThisWithApply(fn, arg, traits){
  return fn.apply(arg, traits);
}

function returnNewFunctionOf(fn, thisValue){
  return fn.bind(thisValue);
}
