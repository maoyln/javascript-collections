var a = 2;

function foo() {
  var a = 3;

  console.log(a); // 3
  return function () {
    console.log(a); // 3
  }
}

foo()(); // 3

console.log(a); // 2