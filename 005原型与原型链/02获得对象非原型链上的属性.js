// 使用后hasOwnProperty()方法来判断属性是否属于原型链的属性：

const a = {
  t: '1',
  b: '2',
  f: function () {
    console.log('fff');
  }
}

function iterate(obj){
  var res=[];
  for(var key in obj){
    if(obj.hasOwnProperty(key))
      res.push(key+': '+obj[key]);
  }
  return res;
} 

const ob = iterate(a)

console.log(a);
console.log(ob);