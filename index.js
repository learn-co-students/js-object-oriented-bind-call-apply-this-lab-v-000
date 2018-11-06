function justInvoke(fn) {
    output = function () {
        return fn();
    }
    return output();
}

function setThisWithCall (fn, thisValue, arg) {
    return fn.call(thisValue, arg);
}

function setThisWithApply (fn, thisValue, arg) {
    return fn.apply(thisValue, arg);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
    let output = function () {
        return functionToBeCopied();
      }
      let duplicate = functionToBeCopied.bind(thisValue);
      return duplicate;
}