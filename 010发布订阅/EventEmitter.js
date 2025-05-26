// 简单的事件总线
class EventEmitter {
  constructor() {
    this.events = {};
  }

  // 订阅事件
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  // 发布事件
  emit(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(callback => callback(data));
    }
  }
}

// 使用示例
const emitter = new EventEmitter();

// 订阅事件
emitter.on('userLoggedIn', user => {
  console.log('Welcome,', user.name);
});

// 发布事件（异步操作后）
setTimeout(() => {
  emitter.emit('userLoggedIn', { name: 'Charlie' });
}, 2000);