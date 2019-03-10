//Your code here
function justInvoke(fn) {
    return fn();
}

function setThisWithCall(fn, thisVal, arg) {
    return fn.call(thisVal, arg);
}

function setThisWithApply(fn, thisVal, argArray) {
    return fn.apply(thisVal, argArray);
}

function returnNewFunctionOf(fn, thisVal) {
    let newFn = fn.bind(thisVal);
    return newFn;
}