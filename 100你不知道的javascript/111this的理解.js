function foo(mun) {
  console.log('foo: ' + mun);
  this.count ++;
}

foo.count = 0;

var i;

for (i = 0; i < 10; i++) {
  if (i < 5) {
    foo(i);
  }
}

console.log(foo.count) // 0
console.log(foo.count) // NaN

// foo: 0
// foo: 1
// foo: 2
// foo: 3
// foo: 4
// 0

console.log('---------------------------------------华丽分割线--------------------------------');


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

console.log(data.count) // 0

// 从某种角度来说这个方法确实“解决”了问题，但可惜它忽略了真正的问题——无法理解this的含义和工作原理——而是返回舒适区，使用了一种更熟悉的技术：词法作用域。