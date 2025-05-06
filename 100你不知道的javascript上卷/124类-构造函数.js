class Person {
  name = '';
  constructor(trick) {
    this.name = trick;
  }
  hello() {
    console.log('你好', this.name);
  }
}

Joe = new Person( "小红" ) // 初始化一个人叫小明

Joe.hello() // 打招呼