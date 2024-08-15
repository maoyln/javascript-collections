// Object.is() 与比较操作符 “===”、“==” 的区别？

// ● 使用双等号（==）进行相等判断时，如果两边的类型不一致，则会进行强制类型转化后再进行比较。
// ● 使用三等号（===）进行相等判断时，如果两边的类型不一致时，不会做强制类型准换，直接返回 false。
// ● 使用 Object.is 来进行相等判断时，一般情况下和三等号的判断相同，它处理了一些特殊的情况，比如 -0 和 +0 不再相等，两个 NaN 是相等的。

console.log(1 == true); // true
console.log(1 === true); // false

console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

console.log(-0 == 0); true
console.log(-0 === 0); true

console.log(Object.is(NaN) == Object.is(NaN)); // true
console.log(Object.is(NaN) === Object.is(NaN)); // true

console.log(Object.is(-0) == Object.is(0)); // true
console.log(Object.is(-0) === Object.is(0)); // true



