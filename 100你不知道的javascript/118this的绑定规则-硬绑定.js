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
