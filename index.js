
function justInvoke(fn) {
  return fn()
}

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg)
}

function setThisWithApply(fn, thisValue, args) {
  // console.log(`apply ${args}`)
  return fn.apply(thisValue, args)
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  let functionCopy = functionToBeCopied.bind(thisValue);
  return functionCopy;
}
