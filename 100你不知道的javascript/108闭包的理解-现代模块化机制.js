const MyModule = (() => {
  const modules = {};
  const define = (name, deps, impl) => {
    // 这里的name是模块的名字
    for (let i = 0; i < deps.length; i++) {
      // 这里的deps是一个数组，里面是模块的名字
      // 这里的modules是一个对象，里面是模块的名字和模块的实现
      deps[i] = modules[deps[i]];
    }
    // 这里的impl是一个函数，返回值是一个对象
    modules[name] = impl.apply(impl, deps);
  }

  const get = (name) => {
    return modules[name];
  }
  return {
    define,
    get
  }
})()

// 这里的define是一个函数，返回值是一个对象
MyModule.define('module1', [], function () {
  const Hello = (who) => {
    return "Let me introduce:" + who;
  }
  return {
    Hello
  }
})

MyModule.define('module2', ['module1'], function (module1) {
  const hungry = 'hungry';
  const awesome = () => {
    console.log(module1.Hello(hungry).toUpperCase());
  }

  return {
    awesome
  }
})

const module1 = MyModule.get('module1');
const module2 = MyModule.get('module2');

console.log(module1.Hello('world')); // Let me introduce world
module2.awesome(); // LET ME INTRODUCE HUNGRY