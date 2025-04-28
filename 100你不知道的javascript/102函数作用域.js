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

(function () {
  var a = 4;
  console.log(a); // 4
}
)(); // 4
console.log(a); // 2