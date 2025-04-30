/**
 * this硬绑定
 */

function foo() {
  console.log(this.a); // 2
}

var obj = {
  a: 2,
}

var bar = function() {
  foo.call(obj);
}

bar();  // 2 

setTimeout(bar, 200);  // 2 

bar.call(global || window); // 2 

console.log('---------------------------------------华丽分割线--------------------------------');

// 使用方法是创建一个可以重复使用的辅助函数
function foo1(something) {
  console.log(this.a, something);
  return this.a + something;
}

var obj1 = {
  a: 2
}
var bar1 = function() {
  return foo1.apply(obj1, arguments);
}

var b = bar1(3); // 2, 3
console.log(b); // 5
// 友情提示：此处打印结果阅读要注意上面的setTimeout

console.log('---------------------------------------华丽分割线--------------------------------');

// 领一种使用方法是创建一个可以重复使用的辅助函数

function foo2(something) {
  console.log(this.a, something);
  return this.a + something;
}

function bind(fn, obj) {
  return function() {
    return fn.apply(obj, arguments)
  }
}

var obj2 = {
  a: 2
}
var bar2 = bind(foo2, obj2)

var b2 = bar2(3); // 2, 3
console.log(b2); // 5

console.log('---------------------------------------华丽分割线--------------------------------');

// 由于硬绑定是一种非常常用的模式，所以ES5提供了内置的方法Function.prototype.bind

function foo3(something) {
  console.log(this.a, something);
  return this.a + something;
}


var obj3 = {
  a: 2
}
var bar3 = foo3.bind(obj3)

var b3 = bar3(3); // 2, 3
console.log(b3); // 5