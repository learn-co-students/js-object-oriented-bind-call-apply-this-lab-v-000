//Your code here
function justInvoke(fn){
  return fn();
}

function setThisWithCall(fn, arg1, arg2) {
  return fn.call(arg1, arg2);
}

function setThisWithApply(fn, arg1, arg2){
  return fn.apply(arg1, arg2);
}

function returnNewFunctionOf(fn, name) {

  const newFunction = fn.bind(name);
  return newFunction;

}
