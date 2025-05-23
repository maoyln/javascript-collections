// 模拟promise.all原理

function add(aPromise, bPromise, fn) {
  var x, y;
  aPromise(function(val) {
    x = val;
    if (y !== undefined) {
      fn(x, y);
    }
  });
  bPromise(function(val) {
    y = val;
    if (x !== undefined) {
      fn(x, y);
    }
  });
}

add(function(fna) { return fna(1); }, function(fna) { return fna(2); }, function(a, b) {
  console.log(a + b);
});

console.log('---------------------------------------华丽分割线--------------------------------');

// 使用Promise.all实现上述实例
function addPromise(aPromise, bPromise) {
  return Promise.all([aPromise, bPromise]).then(function([x, y]) {
    console.log(x + y);
  });
}

addPromise(Promise.resolve(5), Promise.resolve(2));

// 代码报错
add(Promise.resolve(function(fna) { return fna(8); }), Promise.resolve(function(fna) { return fna(2); }), function(a, b) {
  console.log(a + b);
});

console.log('---------------------------------------华丽分割线--------------------------------');


// console.log(Promise.reject(2));
console.log('---------------------------------------华丽分割线11--------------------------------');
console.log(Promise.resolve(2));