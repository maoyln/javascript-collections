/**
 * 120this的绑定规则-new创建对象绑定this
 */

/**
 * 使用new来调用函数，或者说发生构造函数调用时，会自动执行下面的操作。
 * 1．创建（或者说构造）一个全新的对象。
 * 2．这个新对象会被执行[[Prototype]]连接。
 * 3．这个新对象会绑定到函数调用的this。
 * 4．如果函数没有返回其他对象，那么new表达式中的函数调用会自动返回这个新对象
 */

function foo(a){
  this.a = a;
}

var bar = new foo(2);
console.log(bar.a);