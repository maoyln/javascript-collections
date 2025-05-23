// 模拟promise

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

add(function(fn) { return fn(1); }, function(fn) { return fn(2); }, function(x, y) {
  console.log(x + y);
});