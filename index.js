//Your code here
const justInvoke = function (anotherFunction) {
  return anotherFunction();
};

const setThisWithCall = function (fn, thisValue, arg) {
  return fn.call(thisValue, arg);
};

const setThisWithApply = function (fn, thisValue, arg) {
  return fn.apply(thisValue, arg);
};

const returnNewFunctionOf = function (fn, thisValue) {
  return fn.bind(thisValue);
};
