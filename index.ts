function justInvoke(fn) {
    return fn();
}

function setThisWithCall(fn, thisValue, arg) {
    const person = thisValue;
    return fn.call(person, arg);
}

function setThisWithApply(fn, thisValue, arg) {
    const name = thisValue;
    return fn.apply(name, arg);
}

function returnNewFunctionOf(fn, value) {
    return fn.bind(value);
}
