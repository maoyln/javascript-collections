// 1.在 JavaScript 中，基本类型是没有属性和方法的，但是为了便于操作基本类型的值，在调用基本类型的属性或方法时 JavaScript 会在后台隐式地将基本类型的值转换为对象

const a = "abc";
console.log(a.length); // 3
console.log(a.toUpperCase()); // "ABC"

// 2.JavaScript也可以使用Object函数显式地将基本类型转换为包装类型：

var b = 'abc'
console.log(Object(b)); // String {"abc"} // [String: 'abc']

// 3.也可以使用valueOf方法将包装类型倒转成基本类型：
var c = 'abc'
var d = Object(a)
var e = d.valueOf() // 'abc'

console.log(d, 'd'); // [String: 'abc']
console.log(e, 'e'); // 'abc'

var f = new Boolean( false );
console.log(f, 'f'); // [Boolean: false]
console.log(!f, '!f'); // false
if (!f) {
	console.log( "Oops" ); // never runs
}
