// 显示绑定和隐式绑定哪个优先级更高

function foo() {
  console.log(this.a);
}

var obj1 = {
  a: 2,
  foo,
}

var obj2 = {
  a: 3,
  foo,
}

obj1.foo(); // 2
obj2.foo(); // 3

obj1.foo.call(obj2); // 3
obj2.foo.call(obj1); // 2

// 结论：显示绑定的优先级高于隐式绑定的优先级