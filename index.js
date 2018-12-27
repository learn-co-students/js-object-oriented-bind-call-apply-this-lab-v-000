//Your code here
function justInvoke(fn) {
  fn()
  return fn()
}

function setThisWithCall(fn, thing, arg) {
  fn.call(thing, arg)
  return fn.call(thing, arg)
}

function setThisWithApply(fn, thing, arg) {
  fn.apply(thing, arg)
  return fn.apply(thing, arg)
}

function returnNewFunctionOf(fn, thing) {
  return fn.bind(thing)
}
