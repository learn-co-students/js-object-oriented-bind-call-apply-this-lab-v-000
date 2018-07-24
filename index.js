//ƒ (){ return {thisValue: this, arguments: Array.from(arguments)} }
function justInvoke(fn) {
  return fn();
};

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg);
}

function setThisWithApply(fn, thisValue, args){
  return fn.apply(thisValue, args);
};

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  const newFunct = functionToBeCopied.bind(thisValue);
  return newFunct;
}
