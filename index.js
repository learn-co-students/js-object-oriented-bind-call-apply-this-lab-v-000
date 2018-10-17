//Your code here
function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, person, age) {
  return fn.call(person, age);
}

function setThisWithApply(fn, person, array) {
  return fn.apply(person, array);
}

function returnNewFunctionOf(fn, person) {
  return fn.bind(person);
}
