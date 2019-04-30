//Your code here

function justInvoke(fn) {
    return fn();
}

function setThisWithCall(fn, value, arg) {
  return fn.call(value, arg);
}

function setThisWithApply(fn, value, args) {
  return fn.applw(value, args);
}
