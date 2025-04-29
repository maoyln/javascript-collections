// commonJs也是这个思路(及commonJs的模块化原理)

function foo() {
  var something = 'cool';
  var another = [1, 2, 3];

  function doSomething() {
    console.log(something);
  }
  function doAnother() {
    console.log(another.join('!'));
  }

  return {
    doSomething: doSomething,
    doAnother: doAnother
  };
}

foo().doSomething(); // cool
foo().doAnother(); // 1!2!3