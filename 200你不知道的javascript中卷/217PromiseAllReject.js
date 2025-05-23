// 正确使用Promise.all，传入Promise数组
const promiseAll = Promise.all([
  // 第一个Promise
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  }),
  // 第二个Promise
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  }),

    // 第三个Promise
    new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(3);
      }, 3000);
    })
]);

promiseAll
  .then(results => {
    console.log(results, 'promiseAll结果');
  })
  .catch(error => {
    console.error('Promise.all失败:', error); // Promise.all失败: 3
  });


console.log(promiseAll, 'promiseAll', promiseAll instanceof Promise); // 输出: Promise { <pending> } true