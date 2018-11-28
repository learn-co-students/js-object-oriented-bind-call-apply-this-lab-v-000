//Your code here

function justInvoke(cb) {
    return cb();
}

function setThisWithCall(cb, name, number) {
    return cb.call(name, number);
}

function setThisWithApply(cb, name, array) {
    return cb.apply(name, array);
}

function returnNewFunctionOf(cb, name) {
    return cb.bind(name);
}