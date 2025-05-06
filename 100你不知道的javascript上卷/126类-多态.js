// 基类 - 形状
class Shape {
  constructor(name) {
    this.name = name;
  }

  // 计算面积的方法 (将由子类实现)
  calculateArea() {
    throw new Error('此方法必须由子类实现');
  }

  // 显示信息 (多态方法)
  display() {
    console.log(`这是一个${this.name}，面积为: ${this.calculateArea()}`);
  }
}

// 子类 - 圆形
class Circle extends Shape {
  constructor(radius) {
    super('圆形');
    this.radius = radius;
  }

  // 实现计算面积
  calculateArea() {
    return Math.PI * this.radius ** 2;
  }

  // 重写display方法
  display() {
    console.log(`⚪ ${this.name}，半径: ${this.radius}，面积: ${this.calculateArea().toFixed(2)}`);
  }
}

// 子类 - 矩形
class Rectangle extends Shape {
  constructor(width, height) {
    super('矩形');
    this.width = width;
    this.height = height;
  }

  // 实现计算面积
  calculateArea() {
    return this.width * this.height;
  }

  // 重写display方法
  display() {
    console.log(`⬜ ${this.name}，宽: ${this.width}，高: ${this.height}，面积: ${this.calculateArea()}`);
  }
}

// 子类 - 三角形
class Triangle extends Shape {
  constructor(base, height) {
    super('△ 三角形');
    this.base = base;
    this.height = height;
  }

  // 实现计算面积
  calculateArea() {
    return (this.base * this.height) / 2;
  }
}

// 使用多态
const shapes = [
  new Circle(5),
  new Rectangle(4, 6),
  new Triangle(3, 4)
];

// 遍历调用display方法
shapes.forEach(shape => {
  shape.display(); // 每个形状会调用自己的display实现
});

// 统一调用calculateArea方法
console.log('所有形状的总面积:', 
  shapes.reduce((sum, shape) => sum + shape.calculateArea(), 0)
);