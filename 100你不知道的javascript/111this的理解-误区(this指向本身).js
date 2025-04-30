/**
 * this的第一个误区：this指向本身，
 * 正确的解释：函数中的this指向该函数的调用者
 */

function foo(mun) {
  console.log('foo: ' + mun);
  this.count ++; // this指向window
  // foo.count ++; // 指向foo本身
}

foo.count = 0;

var i;

for (i = 0; i < 10; i++) {
  if (i < 5) {
    foo(i);
  }
}

console.log(foo.count) // 0
console.log(this.count) // undefined
console.log(undefined + 1); // NaN

// foo: 0
// foo: 1
// foo: 2
// foo: 3
// foo: 4
// 0

// 思考：为什么会出现上述现象，此时的
// 的确向函数对象foo添加了一个属性count,但是函数内部代码this.count中的this并不是指向那个函数对象

console.log('---------------------------------------华丽分割线--------------------------------');


// 绕行方案，不推荐
function foo1(mun) {
  console.log('foo: ' + mun);
  data.count ++;
}

var data = {
  count: 0
}

var i;

for (i = 0; i < 10; i++) {
  if (i < 5) {
    foo1(i);
  }
}

console.log(data.count, '绕行方案') // 5

// 从某种角度来说这个方法确实“解决”了问题，但可惜它忽略了真正的问题——无法理解this的含义和工作原理——而是返回舒适区，使用了一种更熟悉的技术：词法作用域。

console.log('---------------------------------------华丽分割线--------------------------------');

// 使用第四行的  foo.count ++; // 指向foo本身 即可使【console.log(foo.count) // 4 】变成想要的值；
function foo2(mun) {
  console.log('foo2: ' + mun);
  foo2.count ++; // 指向foo本身
}

foo2.count = 0;

var i;

for (i = 0; i < 10; i++) {
  if (i < 5) {
    foo2(i);
  }
}

console.log(foo2.count, '使用foo.指向foo本身') // 5

console.log('---------------------------------------华丽分割线--------------------------------');

// 改变this指向的方法（理解this指向）
function foo3(mun) {
  console.log('foo3: ' + mun);
  this.count ++; // this指向window
}

foo3.count = 0;

var i;

for (i = 0; i < 10; i++) {
  if (i < 5) {
    foo3.call(foo3, i);
  }
}

console.log(foo3.count, '改变this指向') // 5