//Your code here

function justInvoke(returnsThisAndArg) {
   return returnsThisAndArg()
}

function setThisWithCall(returnsThisAndArg, name, age){
 return returnsThisAndArg.call(name, age )
}

function setThisWithApply(returnsThisAndArg, name, age){
    return returnsThisAndArg.apply(name,age)
}


function returnNewFunctionOf(functionToBeCopied, thisValue) {
    const copy = functionToBeCopied.bind(thisValue);
    return copy;
  }