
//this function will take a function as an argument and shows that the return value is a global callback
function justInvoke(fn){
  return fn()
  //console.log(fn)
}




//create a function that take 3 arguments
//1 a callback function
//2 an object that will be set as the this value with the callback
//3 an argument to be used in the call function


//calls and returns the function as a callback, and assigns this to be bob while passing an argument to the invoked function
function setThisWithCall(fn, thisValueObject, argument){
    return fn.call(thisValueObject, argument)
}
//calls and returns the function as a callback, and assigns this to be bob while passing all arguments to the invoked function ‣
//calls and returns the function as a callback, assigns this to be bob, and sets the array as arguments
function  setThisWithApply(fn, thisValueObject, arrayArg){
    return fn.apply(thisValueObject, arrayArg)
}

//returns a new function ‣
//sets the this argument to fred
function returnNewFunctionOf(fn, thisValueObject){
    return fn.bind(thisValueObject)
}
//
//
//
//  describe('returnNewFunctionOf', function(){
//    let fred;
//    let functionToBeCopied;
//
//    beforeEach(function(){
//      functionToBeCopied = function (){
//        return this
//      }
//     fred = { name: 'fred'}
//    })
//    it('returns a new function', function(){
//      expect(returnNewFunctionOf(functionToBeCopied)).to.not.equal(functionToB//eCopied)
//      expect(typeof //returnNewFunctionOf(functionToBeCopied)).to.equal("function")
//    })
//    it('sets the this argument to fred', function(){
//      let newFunction = returnNewFunctionOf(functionToBeCopied, fred)
//      expect(newFunction()).to.equal(fred)
//    })
//  })
//})
//
