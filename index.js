const justInvoke = fn => fn()
const setThisWithCall = (fn, dis, args) => fn.call(dis, args)
const setThisWithApply = (fn, dis, args) => fn.apply(dis, args)
const returnNewFunctionOf = (fn, dis) => fn.bind(dis)
