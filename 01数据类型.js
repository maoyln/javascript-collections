// 数据类型检测的方式有哪些

// （1）typeof
console.log(typeof 2);               // number
console.log(typeof true);            // boolean
console.log(typeof 'str');           // string
console.log(typeof []);              // object    
console.log(typeof function(){});    // function
console.log(typeof {});              // object
console.log(typeof undefined);       // undefined
console.log(typeof null);            // object

// 结论：其中数组、对象、null都会被判断为object，其他判断都正确。

console.log('--------------------------------华丽分割线--------------------------------');

// （2）instanceof
// instanceof可以正确判断对象的类型，其内部运行机制是判断在其原型链中能否找到该类型的原型。
console.log(2 instanceof Number);                    // false
console.log(true instanceof Boolean);                // false 
console.log('str' instanceof String);                // false 
 
console.log([] instanceof Array);                    // true
console.log(function(){} instanceof Function);       // true
console.log({} instanceof Object);                   // true

// 结论：可以看到，instanceof只能正确判断引用数据类型，而不能判断基本数据类型。instanceof 运算符可以用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。

console.log('--------------------------------华丽分割线--------------------------------');

// （3） constructor
console.log((2).constructor === Number); // true
console.log((true).constructor === Boolean); // true
console.log(('str').constructor === String); // true
console.log(([]).constructor === Array); // true
console.log((function() {}).constructor === Function); // true
console.log(({}).constructor === Object); // true

// 结论：constructor有两个作用，一是判断数据的类型，二是对象实例通过 constrcutor 对象访问它的构造函数。需要注意，如果创建一个对象来改变它的原型，constructor就不能用来判断数据类型了：

console.log('--------------------------------华丽分割线--------------------------------');

function Fn(){};
 
Fn.prototype = new Array();
 
var f = new Fn();
 
console.log(f.constructor===Fn);    // false
console.log(f.constructor===Array); // true

console.log('--------------------------------华丽分割线--------------------------------');


// （4）Object.prototype.toString.call()
// Object.prototype.toString.call() 使用 Object 对象的原型方法 toString 来判断数据类型：

var a = Object.prototype.toString;
 
console.log(a.call(2)); // [object Number]
console.log(a.call(true)); // [object Boolean]
console.log(a.call('str')); // [object String]
console.log(a.call([])); // [object Array]
console.log(a.call(function(){})); // [object Function]
console.log(a.call({})); // [object Object]
console.log(a.call(undefined)); // [object Undefined]
console.log(a.call(null)); // [object Null]
