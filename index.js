//Your code here
function justInvoke(funct) {
  return funct();
}

function setThisWithCall(funct, thisVar, arg) {
  return funct.call(thisVar, arg);
}

function setThisWithApply(funct, thisVar, arg) {
  return funct.apply(thisVar, arg);
}

function returnNewFunctionOf(funct, thisVar) {
  const newFunct = funct.bind(thisVar);
  return newFunct;
}
