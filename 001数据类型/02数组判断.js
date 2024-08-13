// 判断数组的方式有哪些

// 1.通过Object.prototype.toString.call()做判断
Object.prototype.toString.call(obj).slice(8,-1) === 'Array';

// 2.通过原型链做判断
obj.__proto__ === Array.prototype;

// 3.通过ES6的Array.isArray()做判断
Array.isArrray(obj);

// 4.通过instanceof做判断
obj instanceof Array

// 5.通过Array.prototype.isPrototypeOf
Array.prototype.isPrototypeOf(obj)

