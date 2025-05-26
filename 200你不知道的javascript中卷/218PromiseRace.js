// 正确使用Promise.race，传入Promise数组

// 第一个返回的Promise会被使用(不管是resolve还是reject，结果都会被返回)

const promiseRace = Promise.race([
  // 第一个Promise
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(1);
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

promiseRace
  .then(results => {
    console.log(results, 'promiseRace结果');
  })
  .catch(error => {
    console.error('Promise.race失败:', error); // Promise.race失败: 1
  });


console.log(promiseRace, 'promiseRace', promiseRace instanceof Promise); // 输出: Promise { <pending> } true