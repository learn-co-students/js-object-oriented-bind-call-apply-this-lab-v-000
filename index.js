//Your code here

function justInvoke(cb) {
	return cb();
}

function setThisWithCall(fn, obj, arg) {
	return fn.call(obj, arg);
}

function setThisWithApply(fn, obj, arg) {
	return fn.apply(obj, arg);
}

function returnNewFunctionOf(fn, obj) {
	const describeObj = fn.bind(obj);

	return describeObj;
}