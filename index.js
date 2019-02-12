//Your code here

function justInvoke(fn){
  return fn()
}

function setThisWithCall(fn, thisValue, arg){
//   Because a callback function is invoked inside another function,
//   we can forward to it any arguments passed to the outer function. For example:
// function greet (name, cb) {
//  return cb(name);
// }

  return fn.call(thisValue, arg)
}

function setThisWithApply(fn, thisValue, args){
  return fn.apply(thisValue, [20, 'black'])

}

function returnNewFunctionOf(functionToBeCopied, thisValue){
  const copy = functionToBeCopied.bind(thisValue);
 return copy;
}
