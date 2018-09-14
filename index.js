//Your code here

function justInvoke(fn) {
  return fn()
}

function setThisWithCall(fn, obj, age) {
  return fn.call(obj, age)
}

function setThisWithApply(fn, obj, args) {
  return fn.apply(obj, [...args])
}

function returnNewFunctionOf(fn, obj) {
  let newFunction = fn.bind(obj)
  return newFunction
}
