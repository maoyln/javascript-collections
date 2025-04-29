// commonJs也是这个思路(及commonJs的模块化原理)

function CoolModule() {
  var something = 'cool';
  var another = [1, 2, 3];

  function doSomething() {
    console.log(something);
  }
  function doAnother() {
    console.log(another.join('!'));
  }

  function updateSomething(newSomething) {
    something = newSomething;
  }

  return {
    doSomething,
    doAnother,
    updateSomething,
    // something,
    // another
  };
}

// 以上代码是一个闭包的例子，CoolModule函数返回一个对象，这个对象包含了两个方法：doSomething和doAnother。
// 这两个方法可以访问到CoolModule函数内部的变量something和another，因为它们是闭包。
// 这样就实现了对这些变量的封装，外部无法直接访问它们，只能通过返回的对象来访问。
// 这种方式可以有效地保护数据的隐私，避免外部代码对这些变量的直接修改。
// 下面是使用CoolModule的例子：
const cool = CoolModule();

cool.updateSomething('awesome'); // 更新 something 的值
cool.doSomething(); // cool
cool.doAnother(); // 1!2!3

// console.log(cool.something);
// console.log(cool.another);

// 
const cool1 = CoolModule();

cool1.updateSomething('other'); // 更新 something 的值
cool1.doSomething(); // cool
cool1.doAnother(); // 1!2!3


/**
 * 总结
 * 模块模式需要具备两个必要条件。
 * 1．必须有外部的封闭函数，该函数必须至少被调用一次（每次调用都会创建一个新的模块实例）。
 * 2．封闭函数必须返回至少一个内部函数，这样内部函数才能在私有作用域中形成闭包，并且可以访问或者修改私有的状态。
 */