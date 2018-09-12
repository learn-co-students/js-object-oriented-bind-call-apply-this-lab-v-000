//Your code here
function justInvoke (arg) {
    return arg.call(this);
 }

 function setThisWithCall (func, name, age){
     return func.call(name, age);
 }

function setThisWithApply (func, name, args){
    return func.apply(name, args);
}

function returnNewFunctionOf (func, name) {
    return func.bind(name);
}
