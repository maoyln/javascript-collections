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
  Promise.resolve(function(fna) { return fna(8); }),
  Promise.resolve(function(fna) { return fna(2); }),
  function(a, b) {
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
  function(a, b) {
    console.log(a + b); // 输出 10
  }
);