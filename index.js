function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg)

}

function setThisWithApply(fn, thisValue, args) {
  return fn.apply(thisValue, [args][0])
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  let copiedFunction = functionToBeCopied.bind(thisValue);
  return copiedFunction;
}
