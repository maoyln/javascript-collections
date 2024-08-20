function Person(name) {
  this.name = name
}
// 修改原型
Person.prototype.getName = function() {}
var p = new Person('hello')
console.log(p.__proto__ === Person.prototype) // true
console.log(p.__proto__ === p.constructor.prototype) // true
// 重写原型
Person.prototype = {
  getName: function() {}
}
var p = new Person('hello')
console.log(p.__proto__ === Person.prototype)        // true
console.log(p.__proto__ === p.constructor.prototype) // false

// 可以看到修改原型的时候p的构造函数不是指向Person了，
// 因为直接给Person的原型对象直接用对象赋值时，它的构造函数指向的了根构造函数Object，
// 所以这时候p.constructor === Object ，而不是p.constructor === Person。要想成立，就要用constructor指回来：

console.log('--------------------------------------华丽分割线--------------------------------------');


// 如下：
Person.prototype = {
  getName: function() {}
}
var p = new Person('hello')
p.constructor = Person
console.log(p.__proto__ === Person.prototype)        // true
console.log(p.__proto__ === p.constructor.prototype) // true

console.log('--------------------------------------华丽分割线--------------------------------------');

p.__proto__  // Person.prototype
Person.prototype.__proto__  // Object.prototype
p.__proto__.__proto__ //Object.prototype
p.__proto__.constructor.prototype.__proto__ // Object.prototype
Person.prototype.constructor.prototype.__proto__ // Object.prototype
p1.__proto__.constructor // Person
Person.prototype.constructor  // Person



console.log('--------------------------------------华丽分割线--------------------------------------');
// 4. 原型链的终点是什么？如何打印出原型链的终点？
// 由于Object是构造函数，原型链终点是Object.prototype.__proto__，而Object.prototype.__proto__=== null 
// true，所以，原型链的终点是null。原型链上的所有原型都是对象，所有的对象最终都是由Object构造的，而Object.prototype的下一级是Object.prototype.__proto__。