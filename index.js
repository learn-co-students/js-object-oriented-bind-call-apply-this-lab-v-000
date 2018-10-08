function justInvoke(fn){
  return fn();
}

function setThisWithCall(fn, thisValue, arg){
  //Taking the function in the Arguement we are attaching it to two values to run
  return fn.call(thisValue, arg)
}

function setThisWithApply(fn, thisValue, args){
  //Taking the function in the arguement and we are attaching it to two values to run with apply
  return fn.apply(thisValue, args)
}

function returnNewFunctionOf(functionToBeCompied, thisValue){
  //Creating a constant that contains a function
  //Returns said function
  const functionCopy = functionToBeCompied.bind(thisValue);
  return functionCopy;
}
