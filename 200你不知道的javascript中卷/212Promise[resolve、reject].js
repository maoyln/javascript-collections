var a = new Promise(function (resolve, reject) {
  resolve(1);
});

var b = new Promise(function (resolve, reject) {
  resolve('b');
});


var c = new Promise(function (resolve, reject) {
  resolve({c1: 'c1', c2: 'c2'});
});

var err = new Promise(function (resolve, reject) {
  reject('aaaError');
});
console.log(a); // Promise { 1 }
console.log(b); // Promise { 'b' }
console.log(c); // Promise { { c1: 'c1', c2: 'c2' } }
console.log(c.c1); // undefined
console.log(err); // Promise { <rejected> 'aaaError' }  紧接着就会报错
console.log('---------------------------------------华丽分割线--------------------------------');

a.then((a1) => {
  console.log(a1, 'a1'); // 1
})

a.then((a2) => {
  console.log(a2, 'a2'); // 1
})

b.then((b1) => {
  console.log(b1, 'b1'); // b
})

c.then((res) => {
  console.log(res, 'res'); // { c1: 'c1', c2: 'c2' }
  console.log(res.c1, 'res.c1'); // c1
  console.log(res.c2, 'res.c2'); // c2
})

err.then((err1) => {
  console.log(err1, 'err1'); // node:internal/process/promises:265   triggerUncaughtException(err, true /* fromPromise */);
})
console.log('---------------------------------------华丽分割线--------------------------------');

// 如果你没有用任何值显式决议，那么这个值就是 undefined，这是 JavaScript 常见的处理方 式。但不管这个值是什么，无论当前或未来，它都会被传给所有注册的(且适当的完成或 拒绝)回调。

// 由于 Promise 只能被决议一次，所以任何通过 then(..) 注册的(每个)回调就只会被调 用一次。
// 当然，如果你把同一个回调注册了不止一次(比如p.then(f); p.then(f);)，那它被调用 的次数就会和注册次数相同。响应函数只会被调用一次，但这个保证并不能预防你搬起石 头砸自己的脚。\




/**
 * 还有一点需要清楚:如果使用多个参数调用 resovle(..) 或者 reject(..)，第一个参数之 后的所有参数都会被默默忽略。这看起来似乎违背了我们前面介绍的保证，但实际上并没 有，因为这是对 Promise 机制的无效使用。
 * 对于这组 API 的其他无效使用(比如多次重复 调用 resolve(..))，也是类似的保护处理，所以这里的 Promise 行为是一致的(如果不是 有点令人沮丧的话)。
 */


var p = new Promise(function (resolve, reject) {
  resolve(1, 2, 3);
}).then((a1, a2, a3) => {
  console.log(a1, a2, a3, '11111');
  return 2
}).then((a1, a2, a3) => {
  console.log(a1, a2, a3, '22222');
  return 555
});


console.log(p, 'p');
p.then((a1, a2, a3) => {
  console.log(a1, a2, a3, '333333');
})

var p2 = new Promise(function (resolve, reject) {
  resolve(1, 2, 3);
})
 
console.log(p2, 'p2');
const p3 = p2.then((a1, a2, a3) => {
  console.log(a1, a2, a3, '333333--111111');
  return a1
})

console.log(p3, 'p3');
