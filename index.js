//Your code here
function justInvoke(fn) {
    return fn();
}

function setThisWithCall(fn, thisValue, arg) {
    return fn.call(thisValue, arg);
}

function setThisWithApply(fn, thisValue, args) {
    const newArgs = Array.prototype.slice.apply(args);
    return fn.apply(thisValue, newArgs);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
    const newFunction = functionToBeCopied.bind(thisValue);
    return newFunction;
}