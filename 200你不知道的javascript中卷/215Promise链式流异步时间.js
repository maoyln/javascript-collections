/**
 * 前面提到的 reject(..) 不会像 resolve(..) 一样进行展开。
 * 如果向 reject(..) 传入一个 Promise/thenable 值，它会把这个值原封不动地设置为 拒绝理由。
 * 后续的拒绝处理函数接收到的是你实际传给 reject(..) 的那个 Promise/thenable，而不是其底层的立即值
 */

var rejectPr = new Promise(function (resolve, reject) {
  resolve(Promise.reject('reject'));
});

rejectPr.then(
  function (value) {
    console.log('resolved: ', value);
  },
  function (reason) {
    console.log('rejected: ', reason); // rejected:  reject
  }
);

rejectPr.then((value) => {
  console.log(11111111, value);
},
(value) => {
  console.log(2222222, value); // 2222222 reject
})
