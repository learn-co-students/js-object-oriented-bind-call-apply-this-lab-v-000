function justInvoke (cb) {
  return cb ();
}

function setThisWithCall (cb, thisValue, arg) {
  return cb.call(thisValue, arg);
}

function setThisWithApply(cb, thisValue, args) {
  return cb.apply(thisValue, args)
}

function returnNewFunctionOf(cb, thisValue) {
  return cb.bind(thisValue);
}
