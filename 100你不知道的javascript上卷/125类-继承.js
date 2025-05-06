class Animal {
  constructor(name) {
    this.name = name;
    this.speed = 0;
  }

  run(speed) {
    this.speed = speed;
    console.log(`${this.name} 以速度 ${this.speed} 奔跑`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} 停了下来`);
  }
}


class Rabbit extends Animal {
  constructor(name, earLength) {
    super(name)
    this.earLength = earLength;
  }

   // 子类特有方法
  hide() {
    console.log(`${this.name}躲了起来！`);
  }

   // 重写父类方法
  stop() {
    super.stop(); // 调用父类的stop方法
    this.hide();  // 然后执行子类特有行为
  }
}

// 使用示例
const animal = new Animal('普通动物');
animal.run(5);  // 普通动物 以速度 5 奔跑
animal.stop();  // 普通动物 停了下来

const rabbit = new Rabbit('小白兔', 10);
rabbit.run(10); // 小白兔 以速度 10 奔跑
rabbit.stop();  // 小白兔 停了下来
               // 小白兔 躲起来了!
console.log(rabbit.earLength); // 10
rabbit.hide();  // 小白兔 躲起来了!
