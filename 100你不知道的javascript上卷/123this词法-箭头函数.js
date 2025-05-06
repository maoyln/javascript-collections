function foo() {
  return (a) => {
    console.log(this.a);
  }
}

var obj1 = {
  a: 2
}

var obj2 = {
  a: 3
}

var bar = foo.call(obj1);
bar.call(obj2); // 2  这里注意了：这里是2，不是3

// foo()内部创建的箭头函数会捕获调用时foo()的this。由于foo()的this绑定到obj1, bar（引用箭头函数）的this也会绑定到obj1，箭头函数的绑定无法被修改。
