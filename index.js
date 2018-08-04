// invokes a function passed through it
// returns the return value of the passed through function
// I need to figure out more about this - http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/
// What's thisValue
let justInvoke = function(fn){
  // debugger;
  return fn();
}

// setThisWithCall(fn, thisValue, arg)
// the function invokes a function put into it
// uses the call method to return the function's this value
// calls and returns the function as a callback
// assigns this to be bob while passing an argument to the invoked function
let setThisWithCall = function(fn, thisValue, arg) {
  this.thisValue = thisValue.name;
  this.arg = arg;
  return fn.call(thisValue, arg);
}

// setThisWithApply(fn, thisValue, args)
// calls and returns the function as a callback
// assigns this to be bob while passing all arguments to the invoked function
let setThisWithApply = function(fn, thisValue, args) {
  this.thisValue = thisValue;
  this.args = args;
  return fn.apply(this.thisValue, this.args);
}

// returnNewFunctionOf(functionToBeCopied, thisValue)
// returns new function
// sets the this argument to fred
let returnNewFunctionOf = function(functionToBeCopied, thisValue) {
  return functionToBeCopied.bind(thisValue)
}
