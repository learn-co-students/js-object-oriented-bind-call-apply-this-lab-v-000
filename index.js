function justInvoke(fn) {
    return fn();
};

function setThisWithCall(fn, thisValue, arg) {
    return fn.call(thisValue, arg);
};

function setThisWithApply(fn, thisValue, args) {
    return fn.apply(thisValue, args); //why didn't that have to be an array?
};

function returnNewFunctionOf(functionToBeCopied, thisValue) {
    const copy = functionToBeCopied.bind(thisValue);
    return copy;
};