// 扩展运算符：
let outObj = {
  inObj: {a: 1, b: 2}
}
let newObj = {...outObj}
newObj.inObj.a = 2
console.log(outObj) // {inObj: {a: 2, b: 2}}

console.log(outObj.inObj == newObj.inObj);


let outObj1 = {
  inObj: {a: 1, b: 2}
}
let newObj1 = Object.assign({}, outObj)
newObj1.inObj.a = 2
console.log(outObj1) // {inObj: {a: 2, b: 2}}

// 可以看到，两者都是浅拷贝。
// ● Object.assign()方法接收的第一个参数作为目标对象，后面的所有参数作为源对象。然后把所有的源对象合并到目标对象中。它会修改了一个对象，因此会触发 ES6 setter。
// ● 扩展操作符（…）使用它时，数组或对象中的每一个值都会被拷贝到一个新的数组或对象中。它不复制继承的属性或类的属性，但是它会复制ES6的 symbols 属性。