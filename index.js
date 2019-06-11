// function justInvoke(cb) {
// 	return cb();
// }
let justInvoke = (cb) => cb();

// function setThisWithCall(cb, thisValue, arg) {
// 	return cb.call(thisValue, arg);
// }
let setThisWithCall = (cb, thisValue, arg) => cb.call(thisValue, arg);

// function setThisWithApply(cb, thisValue, args) {
// 	return cb.apply(thisValue, [...args]);
// }
let setThisWithApply = (cb, thisValue, args) => cb.apply(thisValue, [...args]);

// function returnNewFunctionOf(functionToBeCopied, thisValue) {
// 	return functionToBeCopied.bind(thisValue);
// }
let returnNewFunctionOf = (functionToBeCopied, thisValue) => functionToBeCopied.bind(thisValue);