function delay(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, time);
  });
}

// 记录开始时间
const startTime = Date.now();

// 辅助函数：打印带时间戳的消息
function logWithTime(message) {
  const elapsedTime = Date.now() - startTime;
  console.log(`${message} [耗时: ${elapsedTime}ms]`);
}

delay(1000) // 步骤1 
  .then(function STEP2() {
    logWithTime("step 2 (after 1000ms)"); // 自开始 1000ms 后执行 --- step 2 (after 1000ms) [耗时: 1002ms]
    return delay(2000);
  })
  .then(function STEP3() {

    logWithTime("step 3 (after another 2000ms)"); // 自开始 3000ms 后执行---- step 3 (after another 2000ms) [耗时: 3005ms]
    return delay(3000);
  })
  .then(function STEP4() {
    logWithTime("step 4 (after another 3000ms)"); // 自开始 6000ms 后执行 ---- step 4 (after another 3000ms) [耗时: 6007ms]
    return delay(4000);
  })
  .then(function STEP5() {
    logWithTime("step 5 (after another 4000ms)"); // 自开始 10000ms 后执行 ---- step 5 (after another 4000ms) [耗时: 10008ms]
    return delay(5000);

  }).then(function STEP6() {
    logWithTime("step 6 (after another 5000ms)"); // 自开始 15000ms 后执行 ---- step 6 (after another 5000ms) [耗时: 15011ms]
    return delay(6000);
  }).then(function STEP7() {
    logWithTime("step 7 (after another 6000ms)"); // 自开始 21000ms 后执行 ---- step 7 (after another 6000ms) [耗时: 21014ms]
  })

/**
 * 如前所述，严格地说，这个交互过程中有两个 promise:2000ms 延迟 promise， 和第二个 then(..) 链接到的那个链接 promise。
 * 但是你可能已经发现了，在 脑海中把这两个 promise 合二为一之后更好理解，因为 Promise 机制已经自 动为你把它们的状态合并在了一起。这样一来，
 * 可以把return delay(2000) 看作是创建了一个 promise，并用其替换了前面返回的链接 promise。
 */


/**
 *  调用 Promise 的 then(..) 会自动创建一个新的 Promise 从调用返回。
 *  • 在完成或拒绝处理函数内部，如果返回一个值或抛出一个异常，新返回的(可链接的) Promise 就相应地决议。
 *  • 如果完成或拒绝处理函数返回一个 Promise，它将会被展开，这样一来，不管它的决议值是什么，都会成为当前 then(..) 返回的链接 Promise 的决议值。
 */