console.log('---------------------------------------华丽分割线--------------------------------');
console.log(String.prototype.indexOf());
console.log('hello'.indexOf('l'));

// 重写---非常不推荐
String.prototype.indexOf = function () {
  return 1;
}
console.log('hello'.indexOf('l'));

