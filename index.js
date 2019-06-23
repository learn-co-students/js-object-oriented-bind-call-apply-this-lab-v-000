function justInvoke(fn) { 
  const result = fn(); 
  return result; 
}

function setThisWithCall(fn, thisValue, arg) { 
  const result = fn.call(thisValue, arg); 
  return result; 
}
  
function setThisWithApply(fn, thisvalue, arg) {
  const result = fn.apply(thisvalue, arg);
  return result;
}

function returnNewFunctionOf(fn, thisValue) { 
  const copy = fn.bind(thisValue); 
  return copy;
}