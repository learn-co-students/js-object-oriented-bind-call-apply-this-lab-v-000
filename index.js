function justInvoke(fn) {
    return fn();
}


function setThisWithCall(fn, argumentOne, argumentTwo) {
    return fn.call(argumentOne, argumentTwo);
}

function setThisWithApply(fn, thisValue, args) {
    return fn.apply(thisValue, args);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
    
    const newFunc = functionToBeCopied.bind(thisValue);
    return newFunc;
}