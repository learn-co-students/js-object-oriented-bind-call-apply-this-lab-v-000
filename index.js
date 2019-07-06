//Your code here
function justInvoke(fn){
  return fn();
}

function setThisWithCall(fn,thisValue,arg){
  //Call the function ON thisValue, with this arg
  return fn.call(thisValue,arg);
}

function setThisWithApply(fn,thisValue,args){
  return fn.apply(thisValue,args);
}

function returnNewFunctionOf(functionToBeCopied, thisValue){
  //Returns a function that has taught thisValue how to do the desired function
  //Like a swim teacher hands back a kid that knows how to swim. Now the parent can say "swim"
  return functionToBeCopied.bind(thisValue);
}
