//Your code here

function justInvoke(fn){
  return fn();
};

function setThisWithCall(fn, bob, arg){
  return fn.call(bob, arg);
}

function setThisWithApply(fn, bob, arg){
  return fn.apply(bob, arg);
}

function returnNewFunctionOf(funct, arg){
  let newFunction = funct.bind(arg);
  return newFunction;
};
