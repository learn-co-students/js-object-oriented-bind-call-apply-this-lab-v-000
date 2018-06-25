//Your code here
function justInvoke(fn){
  return fn();
}


function setThisWithCall(fn, obj, age){

  return fn.call(obj, age);
}

function setThisWithApply(fn, obj, [age, color]){

  return fn.apply(obj, [age, color]);
}

function returnNewFunctionOf(fn, obj){
  let newFunc = fn.bind(obj)
  return newFunc;
}
