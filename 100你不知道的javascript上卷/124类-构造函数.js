class Person {
  name = '';
  constructor(trick) {
    this.name = trick;
  }
  hello() {
    console.log('你好', this.name);
  }
}

var person = new Person( "小红" ) // 初始化一个人叫小红
person.hello() // 打招呼

var person1 = new Person( "小花" ) // 初始化一个人叫小花
person1.hello() // 打招呼