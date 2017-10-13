function justInvoke(fn) {
	return fn();
}

function setThisWithCall(fn, thisArg, arg1) {
	return fn.call(thisArg, arg1);
}  

function setThisWithApply(fn, thisArg, argArray) {
	return fn.apply(thisArg, argArray);
}

function returnNewFunctionOf(fn, thisArg) {
	let newFn = fn.bind(thisArg);
	return newFn;
}