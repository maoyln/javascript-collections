// （2）apply 函数的实现步骤：
// ● 判断调用对象是否为函数，即使是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。
// ● 判断传入上下文对象是否存在，如果不存在，则设置为 window 。
// ● 将函数作为上下文对象的一个属性。
// ● 判断参数值是否传入
// ● 使用上下文对象来调用这个方法，并保存返回结果。
// ● 删除刚才新增的属性
// ● 返回结果

Function.prototype.myApply = function(context) {
  // 判断调用对象是否为函数
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  let result = null;
  // 判断 context 是否存在，如果未传入则为 window
  context = context || window;
  // 将函数设为对象的方法
  context.fn = this;
  // 调用方法
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  // 将属性删除
  delete context.fn;
  return result;
};

function Food(name, price) {
  console.log('Food函数this =>', this, typeof this);
  Product.myApply(this, [name, price]); // 使用 call 方法继承 Product 构造函数
  this.category = 'food';
}

const apple = new Food('Apple', 2);
console.log(apple.name);  // 输出: "Apple"
console.log(apple.category);  // 输出: "food"
