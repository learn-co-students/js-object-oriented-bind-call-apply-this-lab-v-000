function justInvoke(fn) {
	return fn();
}

function setThisWithCall(fn, person, age) {
	return fn.call(person, age)
}

function setThisWithApply(fn, person, detailsArray) {
	return fn.apply(person, detailsArray)
}

function returnNewFunctionOf(fn, fred) {
	return fn.bind(fred)
}