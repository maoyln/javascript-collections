// call vs apply vs bind
// 方法	   执行时机	                  参数传递	            返回值
// call	  立即执行	                逐个传递参数	        函数执行结果
// apply	立即执行	                数组形式传递参数	     函数执行结果
// bind	  返回新函数，不立即执行	     逐个传递参数或不传	    绑定后的新函数

// 用法对比及场景

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price); // 使用 call 方法继承 Product 构造函数
  this.category = 'food';
}

// 注意上述代码，可以用下面代码替代（方便理解）--该替代方案估计会有问题，用下面一个方案比较好【const instance = Object.create(Food.prototype);】
// function Food(name, price) {
//   Product.call(Food.prototype, name, price); // 使用 call 方法继承 Product 构造函数
//   this.category = 'food';
// }

// 注意上述代码，可以用下面代码替代（方便理解）
// function Food(name, price) {
//   const instance = Object.create(Food.prototype);
//   Product.call(instance, name, price);
//   instance.category = 'food';
//   return instance;
// }

// 注意上述代码，可以用下面代码替代（方便理解）
// function Food(name, price) {
//   const obj = {};
//   Product.call(obj, name, price); // 使用新对象替代this
//   obj.category = 'food';
//   return obj; // 必须手动返回
// }

const apple = new Food('Apple', 2);
console.log(apple.name);  // 输出: "Apple"
console.log(apple.category);  // 输出: "food"
console.log(apple);  // 输出: Food { name: 'Apple', price: 2, category: 'food' }

console.log('--------------------------------------华丽分割线--------------------------------------');




// ES6替代方案

// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
// }

// class Food extends Product {
//   constructor(name, price) {
//     super(name, price); // 替代了Product.call(this,...)
//     this.category = 'food';
//   }
// }