//Your code here
function justInvoke(fn) {
	fn()
	return fn()
};

function setThisWithCall(fn, value, arg) {
	return fn.call(value, arg)
}

function setThisWithApply(fn, value, args) {
	return fn.apply(value, args);
};

function returnNewFunctionOf(fnCopy, value) {
	return fnCopy.bind(value)
}