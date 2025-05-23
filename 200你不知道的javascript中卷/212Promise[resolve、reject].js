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


// 由于 Promise 只能被决议一次，所以任何通过 then(..) 注册的(每个)回调就只会被调 用一次。
// 当然，如果你把同一个回调注册了不止一次(比如p.then(f); p.then(f);)，那它被调用 的次数就会和注册次数相同。响应函数只会被调用一次，但这个保证并不能预防你搬起石 头砸自己的脚。