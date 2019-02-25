//Your code here
function justInvoke(callback) {
  return callback();
}

function setThisWithCall(callback, item, arguments) {
  return callback.call(item, arguments)
}

function setThisWithApply(callback, item, arguments) {
  return callback.apply(item, Array.prototype.slice.call(arguments))
}

function returnNewFunctionOf(callback, item) {
  return callback.bind(item);
}
