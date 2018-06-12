function justInvoke(callback){
  return callback();
}

function setThisWithCall(funkshun, name, age){
  return funkshun.call(name, age);
}

function setThisWithApply(funkshun, name, args){
  return funkshun.apply(name, args);
}

function returnNewFunctionOf(funkshun, name){
  return funkshun.bind(name);
}
