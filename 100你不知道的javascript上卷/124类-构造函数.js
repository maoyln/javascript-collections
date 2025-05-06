class CoolGuy {
  specialTrick = '初始化名字';
  constructor(trick) {
    this.specialTrick = trick;
  }
  showOff() {
    console.log('here‘s my trick', this.specialTrick);
  }
}

Joe = new CoolGuy( "jumping rope" )

Joe.showOff() // 这是我的绝技:跳绳