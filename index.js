function justInvoke(fn) {
    return fn();
}
function setThisWithCall(fn, thisValue, arg) {
    return fn.call(thisValue, arg);
}
function setThisWithApply(fn, thisValue, args) {
    return fn.apply(thisValue, args);
}
// returnNewFunctionOf(functionToBeCopied, thisValue): Here, we ask you to write a function that returns a copy of the function passed through, but sets the this value of the function's copy.
function returnNewFunctionOf(functionToBeCopied, thisValue) {
    return functionToBeCopied.bind(thisValue);
}