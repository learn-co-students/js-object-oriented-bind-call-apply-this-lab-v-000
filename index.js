function justInvoke(fn) {
  return fn()
}

function setThisWithCall(fn, person, age) {
  return fn.call(person, age)
}

function setThisWithApply(fn, person, [age, hairColor]) {
  return fn.apply(person, [age, hairColor])
}

function returnNewFunctionOf(fn, person) {
  return newfunction = fn.bind(person)
}
