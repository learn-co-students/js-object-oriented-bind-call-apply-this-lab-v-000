const justInvoke = fn => fn();

const setThisWithCall = (fn, thisValue) => fn.call(thisValue);

const setThisWithApply = (fn, thisValue, args) => fn.apply(thisValue, args);

const returnNewFunctionOf = (functionToBeCopied, thisValue) =>
  functionToBeCopied.bind(thisValue);
