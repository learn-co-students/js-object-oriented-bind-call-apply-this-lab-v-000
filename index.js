const justInvoke = function (thisValue) {
     this.thisValue = this;
     return this.thisValue;
}

const setThisWithCall = function(cb, name, age) {
    this.thisValue = cb.call(name, age);
    return this.thisValue;
}

const setThisWithApply = function(cb, name, hairArray) {
    this.thisValue = cb.apply(name, hairArray);
    return this.thisValue;
}

const returnNewFunctionOf = function(functionToBeCopied, person) {
   this.thisValue = functionToBeCopied.bind(person);
   return this.thisValue;
}
