// new绑定和隐式绑定哪个优先级高

function foo(something) {
  this.a = something
}

var obj1 = {
  foo
};

var obj2 = {};

obj1.foo(2)
console.log(obj1.a); // 2

obj1.foo.call(obj2, 3);
console.log(obj2.a); // 3

var bar = new obj1.foo(4);
console.log(obj1.a); // 2
console.log(bar.a); // 4

// 结论：new绑定比隐式绑定优先级高