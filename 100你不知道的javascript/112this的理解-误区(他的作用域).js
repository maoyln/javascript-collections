/**
 * this的第一个误区：this的作用域，
 * 正确的解释：函数中的this指向该函数的调用者
 */



// 错误例子
function foo() {
  var a = 2;
  this.bar(); // TypeError: this.bar is not a function
  // bar()
}

function bar() {
  console.log(this.a); // undefined
}

foo();

/**
 * 
 * 关键点：
 * this 的默认绑定规则：
 *      在 非严格模式 下，普通函数（如 foo()）的 this 默认指向 全局对象（浏览器中是 window，Node.js 中是 global）。
 *      在 严格模式 下，this 会是 undefined，直接调用 this.bar() 会报错。
 * 
 * bar 函数的定义位置：
 *      bar 是全局函数（在浏览器中相当于 window.bar），但 foo() 内部的 this 可能不是全局对象（取决于调用方式），因此 this.bar 无法找到 bar 函数。
 */