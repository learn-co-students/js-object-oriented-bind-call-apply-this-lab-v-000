function justInvoke(func) {
  return func();
}

function setThisWithCall(func, context, args) {
  return func.call(context, args);
}

function setThisWithApply(func, context, args) {
  return func.apply(context, args);
}

function returnNewFunctionOf(func, context) {
  return func.bind(context);
}
