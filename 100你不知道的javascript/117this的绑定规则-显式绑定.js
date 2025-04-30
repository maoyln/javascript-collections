/**
 * this显式绑定
 */

// 当函数引用有上下文对象时，隐式绑定规则会把函数调用中的this绑定到这个上下文对象。因为调用foo()时this被绑定到obj，因此this.a和obj.a是一样的
function foo() {
  console.log(this.a); // 2
}

var obj = {
  a: 2,
}

foo.call(obj); // 2
foo.apply(obj); // 2

const bindFoo = foo.bind(obj);
bindFoo(); // 2

