let justInvoke = (fn) => {
  return fn();
}

let setThisWithCall = (fn, thisValue, arg) => {
 return fn.call(thisValue, arg);
}

let setThisWithApply = (fn, thisValue, args) => {
  return fn.apply(thisValue, args);
}

let returnNewFunctionOf = (functionToBeCopied, thisValue) => {
  let newFunction = functionToBeCopied.bind(thisValue);
  return newFunction;
  
}
