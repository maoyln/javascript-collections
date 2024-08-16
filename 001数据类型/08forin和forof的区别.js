// 1. for...in用于比那里对象的可枚举属性。他会比那里对象自身的实行和原型链上继承的属性。
// 对于数组而言，for...in会便利数组的索引（索引是属性名），而不是数组的元素值。

const person = {
  name: 'Alice',
  age: 25,
  city: 'New York'
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// 输出:
// name: Alice
// age: 25
// city: New York

// 在上面的例子中，for...in 用来遍历 person 对象的属性名（name，age，city），并通过属性名访问对应的值。

console.log('--------------------------------------华丽分割线--------------------------------------');

// 遍历数组示例：

const arr = [10, 20, 30];

for (const index in arr) {
  console.log(index); // 输出的是数组的索引
}

// 输出:
// 0
// 1
// 2

console.log('--------------------------------------华丽分割线--------------------------------------');

// for...of 用于遍历可迭代对象（如数组、字符串、Map、Set 等）。与 for...in 不同，for...of 遍历的是数组的元素值而不是索引。

const arr1 = [10, 20, 30];

for (const value of arr1) {
  console.log(value); // 输出的是数组的元素值
}

// 输出:
// 10
// 20
// 30

console.log('--------------------------------------华丽分割线--------------------------------------');

const str = 'Hello';

for (const char of str) {
  console.log(char);
}

// 输出:
// H
// e
// l
// l
// o

console.log('--------------------------------------华丽分割线--------------------------------------');

// 下面的遍历会报错：TypeError: person is not iterable
// for (const char of person) {
//   console.log(char);
// }

// 总结
// for...in：用于遍历对象的可枚举属性，或者数组的索引，不适合直接遍历数组元素。
// for...of：用于遍历可迭代对象的元素值，适合遍历数组、字符串等。

// 注意：
// 如果只需要遍历数组的索引，可以使用 for...in，但大多数情况下，应该使用 for...of 来遍历数组的元素值。
// for...in 会遍历对象所有的可枚举属性，包括继承的属性，因此在使用时要特别注意。