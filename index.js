function justInvoke(fn) {
	return fn();
};

function setThisWithCall(fn, thisValue, arg) {
	return fn.call(thisValue, arg);
};

function setThisWithApply(fn, thisValue, args) {
	return fn.apply(thisValue, args);
};

function returnNewFunctionOf(functionToBeCopied, thisValue) {
	const copy = functionToBeCopied.bind(thisValue);
	return copy;
};

//invokeFunction
//calls and returns the function as a callback, that shows that this
// is global from the callback ‣
//setThisWithCall
//calls and returns the function as a callback, and assigns this to be 
//bob while passing an argument to the invoked function ‣
//setThisWithApply
//calls and returns the function as a callback, and assigns this to be bob while passing all arguments to the invoked function ‣
//calls and returns the function as a callback, assigns this to be bob, and sets the array as arguments ‣
//returnNewFunctionOf
//returns a new function ‣
//sets the this argument to fred