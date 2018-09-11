//Your code here

function justInvoke (cb) {
	return cb();
};


function setThisWithCall (cb, person, age) {
	return cb.call(person, age);
};


function setThisWithApply (cb, person, age) {
	return cb.apply(person, age);
};


function returnNewFunctionOf (cb, person, age) {
	newFunction = cb.bind(person, age);
	return newFunction;
};