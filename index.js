function justInvoke(fn) {
	return this;
}

function setThisWithCall(fn, thisValue) {
	return fn.call(thisValue);
}

function setThisWithApply(fn, thisValue) {
	return fn.apply(thisValue);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
	const newFn = functionToBeCopied.bind(thisValue);
	return newFn;
}