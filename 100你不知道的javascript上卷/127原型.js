// 构造函数
function Person(name) {
  this.name = name;
}

// 在原型上添加方法
Person.prototype.sayHello = function() {
  console.log(`Hello, I'm ${this.name}`);
};

// 创建实例
const person1 = new Person('Alice');

// 原型链访问过程
console.log(person1.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__ === null); // true

// 方法调用时的原型链查找
person1.sayHello(); // 查找顺序: person1 → Person.prototype → Object.prototype → null


/**
[实例对象] 
  │
  ├── __proto__ → [构造函数.prototype] 
  │                │
  │                ├── constructor → [构造函数]
  │                │
  │                └── __proto__ → [Object.prototype]
  │                                 │
  │                                 ├── constructor → Object
  │                                 │
  │                                 └── __proto__ → null
  │
  └── 自身属性/方法
 */


console.log('---------------------------------------华丽分割线--------------------------------');


function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log(`${this.name} is eating.`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

// 设置原型链继承
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log(`${this.name} is barking!`);
};

const myDog = new Dog('Buddy', 'Golden Retriever');
myDog.eat();  // 通过原型链调用Animal的方法
myDog.bark(); // 调用Dog自身的方法

/**
 myDog
  │
  ├── __proto__ → Dog.prototype
  │                │
  │                ├── constructor → Dog
  │                ├── bark() 
  │                │
  │                └── __proto__ → Animal.prototype
  │                                 │
  │                                 ├── constructor → Animal
  │                                 ├── eat()
  │                                 │
  │                                 └── __proto__ → Object.prototype
  │                                                │
  │                                                └── __proto__ → null
  │
  └── 自身属性: name, breed
 */