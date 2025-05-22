var a = Number.isNaN(1); // false
var b = Number.isNaN(NaN); // true
// 转换 DOM 集合

console.log(a);
console.log(b);
console.log('---------------------------------------华丽分割线--------------------------------');

// 1. DOM 集合转换为数字
console.log(NaN === NaN); // false  注意：NaN 是 JavaScript 中唯 一一个不等于自身的值。

console.log('---------------------------------------华丽分割线--------------------------------');

console.log(0 / -1); // -0
console.log(0 / 0); // NaN

console.log(0 / -1 === 0); // true

console.log(0 === -0); // true

console.log('---------------------------------------华丽分割线--------------------------------');
