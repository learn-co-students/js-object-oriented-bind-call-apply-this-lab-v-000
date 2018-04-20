

function justInvoke(fn){
  return fn()
}


// How to call it
// fn.apply(thisValue, 'arg');
function setThisWithCall(fn, thisValue, arg){
  return fn.call(thisValue, arg)
}


// How to call it
// fn.apply(thisValue, ['arg']);
function setThisWithApply(fn, thisValue, arg){
  return fn.apply(thisValue, arg)
}


function returnNewFunctionOf( functionToBeCopied, thisValue ){
  const newfn = functionToBeCopied.bind(thisValue)
  return newfn
}
