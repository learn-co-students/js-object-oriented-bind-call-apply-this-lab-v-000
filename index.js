function justInvoke(fn){
  return   fn();

}


function setThisWithCall(fn, arg1 , arg2){
  return fn.call(arg1, arg2)
}


function setThisWithApply(fn, thisV, arr){
  return fn.apply(thisV, arr)
}

function returnNewFunctionOf(fn, thisV){
  return fn.bind(thisV)
}
