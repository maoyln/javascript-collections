/**
 * this隐式绑定
 */

// 当函数引用有上下文对象时，隐式绑定规则会把函数调用中的this绑定到这个上下文对象。因为调用foo()时this被绑定到obj，因此this.a和obj.a是一样的
function foo() {
  console.log(this.a); // 2
}

var obj = {
  a: 2,
  foo
}

obj.foo(); // 2
foo(); // undefined


console.log('---------------------------------------华丽分割线--------------------------------');

// 对象属性引用链中只有上一层或者说最后一层在调用位置中起作用
function foo1() {
  console.log(this.a); // 32
}

var obj2 = {
  a: 32,
  foo1
}

var obj1 = {
  a: 2,
  obj2
}


obj1.obj2.foo1(); // 32

console.log('---------------------------------------华丽分割线--------------------------------');

// 虽然bar是obj.foo的一个引用，但是实际上，它引用的是foo函数本身，因此此时的bar()其实是一个不带任何修饰的函数调用，因此应用了默认绑定。
function foo2() {
  console.log(this.a); // // 在window下 oop global；  在node下：undefined
}

var obj3 = {
  a: 2,
  foo2
}

var bar = obj3.foo2; // 函数别名

var a = "oop global";

bar(); // 在window下 oop global；  在node下：undefined