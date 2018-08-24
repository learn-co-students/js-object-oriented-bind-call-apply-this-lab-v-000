//Your code here
const justInvoke = function (fn) {
  return fn();
}

const setThisWithCall = function (fn, object, value) {
  return fn.call(object, value);
}

const setThisWithApply = function (fn, object, argument) {
  return fn.apply(object, argument)
}

const returnNewFunctionOf = function (fn, object) {
  return fn.bind(object)
}
