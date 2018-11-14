//Your code here
function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, name, age){
  return fn.call(name, age);
}

function setThisWithApply(fn, thisValue, args){
  return fn.apply(thisValue, args);
}

function returnNewFunctionOf(fn, thisValue){
  let newFunc = fn.bind(thisValue);
  return newFunc;
}
