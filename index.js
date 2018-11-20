//Your code here
function justInvoke (fn) {
  return fn();
}

function setThisWithCall (fn, name, args) {
   return fn.call(name, args);
}

function setThisWithApply (fn, name, args) {
  return fn.apply(name, args);
}

function returnNewFunctionOf (fn, name) {
  return fn.bind(name);
}
