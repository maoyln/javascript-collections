// 1. 转换类数组对象
// 转换 arguments 对象
function foo() {
  const argsArray = Array.from(arguments);
  console.log(argsArray); // 真正的数组
  return argsArray
}
var arr = foo(1, 2, 3); // [1, 2, 3]

console.log(arr, 'arr');
// 转换 DOM 集合

console.log('---------------------------------------华丽分割线--------------------------------');


// 2. 转换字符串
const str = 'hello';
const charArray = Array.from(str);
console.log(charArray); // ['h', 'e', 'l', 'l', 'o']

console.log('---------------------------------------华丽分割线--------------------------------');


// 3. 转换 Set/Map
const set = new Set([1, 2, 3]);
const arrayFromSet = Array.from(set); // [1, 2, 3]
console.log(arrayFromSet);

const map = new Map([[1, 'a'], [2, 'b']]);
const arrayFromMap = Array.from(map); // [[1, 'a'], [2, 'b']]
console.log(arrayFromMap);

console.log('---------------------------------------华丽分割线--------------------------------');


// 4. 使用映射函数
// 创建数字序列
const nums = Array.from({length: 5}, (v, i) => i);
console.log(nums); // [0, 1, 2, 3, 4]

// 加倍数组元素
const doubled = Array.from([1, 2, 3], x => x * 2);
console.log(doubled); // [2, 4, 6]

console.log('---------------------------------------华丽分割线--------------------------------');


// 5. 创建指定长度的数组
// 创建长度为5的数组，填充undefined
const arr1 = Array.from({length: 5});
console.log(arr1); // [undefined, undefined, undefined, undefined, undefined]

// 创建并填充值
const arr2 = Array.from({length: 5}, (_, i) => i + 1);
console.log(arr2); // [1, 2, 3, 4, 5]