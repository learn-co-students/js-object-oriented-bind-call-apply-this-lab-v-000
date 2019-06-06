function justInvoke(fn) {
	return fn.call();
}

function setThisWithCall(fn, thisValue, arg) {
	return fn.call(thisValue, arg);
}

function setThisWithApply(fn, thisValue, arguments) {
	return fn.apply(thisValue, arguments);
}

function returnNewFunctionOf(fn, thisValue) {
	return fn.bind(thisValue);
}