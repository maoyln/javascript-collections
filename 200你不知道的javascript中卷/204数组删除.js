var a = [1,2,3,4]

console.log(a); // [ 1, 2, 3, 4 ]
console.log(a.length); // 4

delete a[2]

console.log(a); // [ 1, 2, <1 empty item>, 4 ]
console.log(a.length); // 4

console.log('---------------------------------------华丽分割线--------------------------------');

var b = [];

b[0] = 1;
b['test'] = 2 // 不影响数组的长度

console.log(b.length);
console.log(b['test']);
console.log(b.test);