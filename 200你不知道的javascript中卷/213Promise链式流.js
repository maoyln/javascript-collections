// • 每次你对 Promise 调用 then(..)，它都会创建并返回一个新的 Promise，我们可以将其 链接起来;
// • 不管从 then(..) 调用的完成回调(第一个参数)返回的值是什么，它都会被自动设置 为被链接 Promise(第一点中的)的完成。
const a = new Promise((resolve, reject) => {
  resolve(21);
}).then((a1) => {
  console.log(a1, 'a1'); // 21 a1
  return a1 * 2
}).then((a2) => {
  console.log(a2, 'a2'); // 42 a2
})

var b = Promise.resolve(21);

b = b.then((b1) => {
  console.log(b1, 'b1'); // 21 b1
  return b1 * 2
}).then((b2) => {
  console.log(b2, 'b2'); // 42 b2
})

console.log(a == b); // false, a 和 b 是两个不同的 Promise，但是它们的值是相同的（创建Promise的两种方式是一样的）

console.log('---------------------------------------华丽分割线--------------------------------');


var c = Promise.resolve(21);

c.then((c1) => {
  console.log(c1, 'c1'); // 21 c1
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(c1 * 2);
    }, 100)
  })
}).then((c2) => {
  console.log(c2, 'c2'); // 42 c2
})