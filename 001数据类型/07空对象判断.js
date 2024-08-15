const Obj = {};

// 使用JSON自带的.stringify方法来判断：
console.log(JSON.stringify(Obj));
if(JSON.stringify(Obj) == '{}' ){
  console.log('空对象1');
}

// 使用ES6新增的方法Object.keys()来判断：

console.log(Object.keys(Obj).length);
if(Object.keys(Obj).length <= 0){
  console.log('空对象2');
}