// String()
console.log('---------------------------------------华丽分割线-String--------------------------------');

var a = String(123);
console.log(a); // "123"
var b = String(true);
console.log(b); // "true"
var c = String(null);
console.log(c); // "null"
var d = String(undefined);
console.log(d); // "undefined"

console.log(typeof a); // string

var e = '123';
console.log(typeof e); // string

var f = new String('123')
console.log(typeof f); // object

console.log(a instanceof String); // true
console.log(f instanceof String); // true

var g = Object(a);
console.log(g); // [String: '123']
console.log(typeof g); // object

console.log(Object.prototype.toString.call(a)); // [object String]
console.log(Object.prototype.toString.call(f)); // [object String]
console.log(Object.prototype.toString.call(g)); // [object String]

console.log('---------------------------------------华丽分割线--Number--------------------------------');

// Number()
Number()

var an = Number('123');
console.log(an); // 123
var bn = Number(true);
console.log(bn); // 1
var cn = Number(null);
console.log(cn); // 0
var dn = Number(undefined);
console.log(dn); // NaN

var en = 123;
console.log(typeof en); // number

var fn = new Number(123);
console.log(typeof fn); // object
console.log(fn instanceof Number); // true

console.log('---------------------------------------华丽分割线--Boolean--------------------------------');
// Boolean()
var a1 = new Boolean(false);
console.log(a1); // [Boolean: false]
if (!a1) {
  console.log("Oops"); // 执行不到这里
}

console.log('---------------------------------------华丽分割线--Array--------------------------------');
// Array()

// 构造函数 Array(..) 不要求必须带 new 关键字。不带时，它会被自动补上。 因此 Array(1,2,3) 和 new Array(1,2,3) 的效果是一样的。
// Array 构造函数只带一个数字参数的时候，该参数会被作为数组的预设长度(length)，而 非只充当数组中的一个元素。
var aar = Array(1, 2, 3);
console.log(aar); // [1, 2, 3]
console.log(aar instanceof Array); // true

var bar = new Array(1, 2, 3);
console.log(bar); // [1, 2, 3]
console.log(bar instanceof Array); // true

var car = new Array(3);
console.log(car); // [undefined, undefined, undefined]
console.log(car instanceof Array); // true

var dar = Array(3);
console.log(dar); // [undefined, undefined, undefined]
console.log(dar instanceof Array); // true

var ear = Array.apply(null, {
  length: 3
});
console.log(ear); // [undefined, undefined, undefined]
console.log(ear instanceof Array); // true


console.log('---------------------------------------华丽分割线--Object--------------------------------');
// 同样，除非万不得已，否则尽量不要使用 Object(..)/Function(..)/RegExp(..):
Object()

console.log('---------------------------------------华丽分割线--Function--------------------------------');
// 同样，除非万不得已，否则尽量不要使用 Object(..)/Function(..)/RegExp(..):
Function()


console.log('---------------------------------------华丽分割线--RegExp--------------------------------');
// 同样，除非万不得已，否则尽量不要使用 Object(..)/Function(..)/RegExp(..):
RegExp()

console.log('---------------------------------------华丽分割线--Date--------------------------------');
Date()

console.log('---------------------------------------华丽分割线--Error--------------------------------');
// Error()

var aer = new Error();
console.log(aer);
console.log(aer instanceof Error);

var ber = new Error('test');
console.log(ber);
console.log(ber instanceof Error);

console.log('---------------------------------------华丽分割线--Symbol--------------------------------');
Symbol() // ES6 中新加入的!

// 我们可以使用 Symbol(..) 原生构造函数来自定义符号。但它比较特殊，不能带 new 关键字，否则会出错:
var asy = Symbol('a');
var bsy = Symbol('b');
var csy = Symbol('c');
var dsy = Symbol('d');
var esy = Symbol('e');
var fsy = Symbol('f');
var gsy = Symbol('g');

console.log(asy); // Symbol(a)
console.log(bsy); // Symbol(b)
console.log(csy); // Symbol(c)
console.log(dsy); // Symbol(d)
console.log(esy); // Symbol(e)
console.log(fsy); // Symbol(f)
console.log(gsy); // Symbol(g)
console.log('---------------------------------------华丽分割线--拆封--------------------------------');
// 拆封
// 如果想要得到封装对象中的基本类型值，可以使用 valueOf() 函数:
console.log(a.valueOf());
console.log(b.valueOf());
console.log(c.valueOf());
console.log(d.valueOf());
console.log(e.valueOf());
console.log(f.valueOf());
console.log(g.valueOf());
console.log(a1.valueOf());