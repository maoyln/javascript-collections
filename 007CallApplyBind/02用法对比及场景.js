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

const apple = new Food('Apple', 2);
console.log(apple.name);  // 输出: "Apple"
console.log(apple.category);  // 输出: "food"

console.log('--------------------------------------华丽分割线--------------------------------------');

