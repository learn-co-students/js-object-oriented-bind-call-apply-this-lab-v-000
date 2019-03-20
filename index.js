//Your code here
function justInvoke(fn) {
	return fn()
}

function setThisWithCall(fn, value, argument) {
	return fn.call(value, argument)
}

function setThisWithApply(fn, value, argument) {
	return fn.apply(value, argument)
}

function returnNewFunctionOf(fn, value) {
	const copy = fn.bind(value)
	return copy
}