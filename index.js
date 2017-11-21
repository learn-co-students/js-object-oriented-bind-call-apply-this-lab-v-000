function justInvoke(fn){
  return fn()
  }

  function setThisWithCall(fn, thisValue, arg){
    const bob = fn.call(thisValue, arg)
    return bob
  }
  function setThisWithApply(fn, thisValue, arg){
    const bob = fn.apply(thisValue, arg)
    return bob
  }
  function returnNewFunctionOf(functionToBeCopied, thisValue){
    let fred = functionToBeCopied.bind(thisValue)
    return fred
    }
