// calls and returns the function as a callback, that shows that this is global from the callback

function justInvoke(fn){
  return fn(this);
};

// calls and returns the function as a callback, and assigns this to be bob while passing an argument to the invoked function

function setThisWithCall(fn, thisValue, arg) {
    return fn.call(thisValue, arg)
}

// calls and returns the function as a callback, and assigns this to be bob while passing all arguments to the invoked function
// calls and returns the function as a callback, assigns this to be bob, and sets the array as arguments

function setThisWithApply(fn, thisValue, args) {
  return fn.apply(thisValue, args)
}

// returns a new function
// sets the this argument to fred

function returnNewFunctionOf(functionToBeCopied, thisValue) {
      return functionToBeCopied.bind(thisValue)
}
