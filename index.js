// calls and returns the function as a callback, that shows that this is global from the callback
const justInvoke = function (returnsThisAndArgs){
  return returnsThisAndArgs ();
}

// calls and returns the function as a callback, and assigns this to be bob while passing an argument to the invoked function
const setThisWithCall = function (fn, thisValue, arg) {
  return fn.call(thisValue, arg);
}

// calls and returns the function as a callback, sets array as arguments.
const setThisWithApply = function (fn, thisValue, args) {
  return fn.apply(thisValue, args);
}

// returns a new function and sets the argument using bind
const returnNewFunctionOf= function (functionToBeCopied, thisValue){
  let copiedFunction = functionToBeCopied.bind(thisValue);
    return copiedFunction;
}
