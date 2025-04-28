// 1. 闭包的定义
// 2. 闭包的作用
// 3. 闭包的实现原理
// 4. 闭包的应用
// 5. 闭包的注意事项
// 6. 闭包的性能问题
// 7. 闭包的内存泄漏
// 8. 闭包的调试
// 9. 闭包的最佳实践
// 10. 闭包的总结

// -----------------------------------------------

// 1. 闭包的定义
// function foo() {
//   var a = 3;

//   console.log(a); // 3
//   function bar () {
//     console.log(a); // 3
//   }
//   bar();
// }

// foo(); // 3

// -----------------------------------------------

// function foo() {
//   var a = 3;

//   console.log(a); // 3
//   function bar () {
//     console.log(a); // 3
//   }
//   return bar;
// }

// var baz = foo(); // 3
// baz(); // 3

// -----------------------------------------------

function foo() {
  var a = 3;

  console.log(a); // 3
  function baz () {
    console.log(a); // 3
  }
  bar(baz);
}

function bar(fn) {
  fn(); // 3
}
foo(); // 3

// -----------------------------------------------

// var fn;
// function foo() {
//   var a = 3;
//   console.log(a); // 3
//   function baz () {
//     console.log(a); // 3
//   }
//   fn = baz;
// }

// function bar() {
//   fn(); // 3
// }

// foo(); // 3
// bar(); // 3
// -----------------------------------------------