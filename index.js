function justInvoke(input){
  return input();
}

function setThisWithCall(cb, name, age){
  return cb.call(name, age);
}

function setThisWithApply(cb, name, ary){
  return cb.apply(name,ary);
}

function returnNewFunctionOf(toCopy, arg){
  // if (arguments.length > 0) {
  //       const customers = Array.prototype.slice.call(arguments);
  //
  //       last = customers.pop();
  //
  //   console.log(`${this.name} for ${customers.join(', ')} and ${last}. Enjoy!`);
  //   } else {
  //       console.log(`${this.name}. Order up!`);
  //   }
  return toCopy.bind(arg);
}
