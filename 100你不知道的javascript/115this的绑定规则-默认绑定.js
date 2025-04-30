/**
 * 默认绑定
 */
function foo() {
  // "use strict" // 严格模式下报错 TypeError: Cannot read properties of undefined (reading 'a')
  console.log(this.a);
}

var a = 2;

foo(); // 2  在window环境  在node环境为undefined



console.log('---------------------------------------华丽分割线--------------------------------');



function foo2() {
  console.log(this.a);
}

var a = 2;

(function() {
  "use strict"
  foo2(); // 2  在window环境  在node环境为undefined
})()


console.log('---------------------------------------华丽分割线--------------------------------');

function foo1() {
  "use strict" // 严格模式下报错 TypeError: Cannot read properties of undefined (reading 'a')
  console.log(this.a);
}

var a = 2;

foo1(); // 2  在window环境  在node环境为undefined