// （1）call 函数的实现步骤：
// ● 判断调用对象是否为函数，即使是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。
// ● 判断传入上下文对象是否存在，如果不存在，则设置为 window 。
// ● 处理传入的参数，截取第一个参数后的所有参数。
// ● 将函数作为上下文对象的一个属性。
// ● 使用上下文对象来调用这个方法，并保存返回结果。
// ● 删除刚才新增的属性。
// ● 返回结果。

Function.prototype.myCall = function(context) {
  console.log('myCall函数context =>',context, typeof context);
  console.log('myCall函数this =>', this, typeof this);
  if (typeof this !== 'function') {
    console.log('type error :>> ', this);
  }

  console.log(arguments, 'arguments01');
  // 获取参数
  let args = [...arguments].slice(1);
  let result = null;

  // 判断context是否传入，如果没有传入则设置为window
  context = context || window;
  context.fn = this;
 
  // 调用函数
  result = context.fn(...args);
  delete context.fn;
  console.log(result, 'result02');
  return result;
}

// 应用

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  console.log('Food函数this =>', this, typeof this);
  Product.myCall(this, name, price); // 使用 call 方法继承 Product 构造函数
  this.category = 'food';
}

const apple = new Food('Apple', 2);
console.log(apple.name);  // 输出: "Apple"
console.log(apple.category);  // 输出: "food"
