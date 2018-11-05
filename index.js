// invokes the function passed through
function justInvoke(fn) {
    return fn();
};

// invokes the function passed through, & uses call() method to return the function's value
function setThisWithCall(fn, thisValue, arg) {
    return fn.call(thisValue, arg);
};

// invokes the function passed through, & change the value of THIS
function setThisWithApply(fn, thisValue, arg) {
    return fn.apply(thisValue, arg);
};

// returns a copy of the function passed through, & sets THIS value of the copy
function returnNewFunctionOf(fn, thisValue) {
    const copy = fn.bind(thisValue);
    return copy;
};