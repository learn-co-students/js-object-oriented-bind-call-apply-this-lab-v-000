function justInvoke(fn) {
    return fn();
}

function setThisWithCall(fn, thisValue, argument) {
    return fn.call(thisValue, argument);
}

function setThisWithApply(fn, thisValue, argument) {
  return fn.apply(thisValue, argument);
} 

function returnNewFunctionOf(fn, obj, args) {
    const newFn = function () {
        return this;
    }.bind(obj);

    return newFn;
}