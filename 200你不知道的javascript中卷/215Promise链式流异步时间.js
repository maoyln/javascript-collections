// 生成失败的Promise（模拟请求失败）
const failedPromise1 = new Promise((_, reject) => {
  setTimeout(() => {
    reject("请求1失败：网络超时");
  }, 1000);
});

const failedPromise2 = new Promise((_, reject) => {
  setTimeout(() => {
    reject("请求2失败：服务器错误");
  }, 2000);
});

// 生成成功的Promise（模拟请求成功）
const successfulPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("请求3成功：数据已获取");
  }, 1500);
});

// ---------------------- 案例1：所有Promise都失败 ----------------------
Promise.none([failedPromise1, failedPromise2])
  .then((reasons) => {
    console.log("所有Promise都失败，失败原因：", reasons);
    // 执行兜底逻辑（如显示错误页面）
  })
  .catch((error) => {
    // 此代码块不会执行，因为所有Promise都失败
    console.error("有Promise成功，错误原因：", error);
  });

// ---------------------- 案例2：存在成功的Promise ----------------------
Promise.none([failedPromise1, successfulPromise])
  .then((reasons) => {
    // 此代码块不会执行，因为有Promise成功
    console.log("所有Promise都失败，失败原因：", reasons);
  })
  .catch((error) => {
    console.error("有Promise成功，第一个成功的值：", error);
    // 输出："有Promise成功，第一个成功的值：请求3成功：数据已获取"
  });