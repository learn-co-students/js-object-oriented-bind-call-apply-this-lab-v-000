//Your code here
function justInvoke(fn){ return fn()}

function setThisWithCall(fn, thisVal, args){
	return fn.call(thisVal, args)
}

function setThisWithApply(fn, thisVal, args){
	return fn.apply(thisVal, args)
}

function returnNewFunctionOf(copiedFunction, thisVal){
	return copiedFunction.bind(thisVal)
}
