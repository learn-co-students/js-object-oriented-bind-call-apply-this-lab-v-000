//Your code here

const invokeFunction = (fn) => {return fn()};

const setThisWithCall = (fn, thisValue, arg) => {return fn.call(thisValue, arg)};

const setThisWithApply = (fn, thisValue, args) => {return fn.apply(thisValue, args)};

const returnNewFunctionOf = (fnToCopy, thisValue) => {return fnToCopy.bind(thisValue)};
