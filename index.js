function justInvoke(returnsThisAndArgs) {
  return returnsThisAndArgs();
}

function setThisWithCall(returnsThisAndArgs, name, value) {
  return returnsThisAndArgs.call(name, value);
}

function setThisWithApply(returnsThisAndArgs, name, array) {
  return returnsThisAndArgs.apply(name, array);
}

function returnNewFunctionOf(functionToBeCopied, name) {
  const copy = functionToBeCopied.bind(name);
  return copy;
}
