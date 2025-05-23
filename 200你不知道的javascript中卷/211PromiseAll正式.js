// 模拟promise.all原理

function add(aPromise, bPromise, fn) {
  Promise.all([aPromise, bPromise])
    .then(([aFn, bFn]) => {
      // 调用解析后的函数获取最终值
      return Promise.all([
        new Promise(resolve => aFn(resolve)),
        new Promise(resolve => bFn(resolve))
      ]);
    })
    .then(([a, b]) => {
      fn(a, b);
    })
    .catch(error => {
      console.error("Error:", error);
    });
}

// 使用示例
add(
  Promise.resolve(function (fna) {
    return fna(8);
  }),
  Promise.resolve(function (fna) {
    return fna(2);
  }),
  function (a, b) {
    console.log(a + b); // 输出 10
  }
);

console.log('---------------------------------------华丽分割线--------------------------------');

// 简化参数传递方式
function add1(aPromise, bPromise, fn) {
  Promise.all([aPromise, bPromise]).then(([a, b]) => {
    fn(a, b);
  });
}

// 直接传递Promise解析的值
add1(
  Promise.resolve(8),
  Promise.resolve(2),
  function (a, b) {
    console.log(a + b); // 输出 10
  }
);


console.log('---------------------------------------华丽分割线--------------------------------');

// 超时
function timeoutPromise(delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      // resolve("Timeout!"); // 完成  *****重要重要******
      reject("Timeout!"); // 失败
    }, delay);
  });
}
// 设置foo()超时 
Promise.race([
  timeoutPromise(4000),
  timeoutPromise(3000)
]).then(
  function () {
    // foo(..)及时完成!
    console.log('foo()及时完成!');
  },
  function (err) {
    console.log(err, 'foo()被拒绝，或者只是没能按时完成');
    // 或者foo()被拒绝，或者只是没能按时完成 // 查看err来了解是哪种情况
  });