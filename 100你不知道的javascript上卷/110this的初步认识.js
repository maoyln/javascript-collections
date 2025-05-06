var me = {
  name: 'myl'
}

var you = {
  name: 'Reader'
}

// 使用this
function identify() {
  // console.log(this.name.toUpperCase());
  return this.name.toUpperCase();
}

function speak() {
  var greeting = "Hello, I`m " + identify.call(this);
  console.log(greeting);
}
 // 此处用 call或者apply 均可
identify.call(me); // MYL
identify.call(you); // READER

speak.call(me) // Hello, I`m MYL
speak.call(you) // Hello, I`m READER

console.log('---------------------------------------华丽分割线--------------------------------');

// 如果不使用this，那就需要给identify()和speak()显式传入一个上下文对象。

function identify1(context) {
  // console.log(this.name.toUpperCase());
  return context.name.toUpperCase();
}

function speak1(context) {
  var greeting = "Hello, I`m " + identify1(context);
  console.log(greeting);
}

identify1(me);
identify1(you);
speak1(me);
speak1(you);