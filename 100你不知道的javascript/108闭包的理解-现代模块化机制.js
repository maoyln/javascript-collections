const MyModule = (() => {
  // 私有变量，存储所有模块
  const modules = {};
  
  // 定义模块的方法
  const define = (name, deps, impl) => {
    // 将依赖的模块名称转换为实际的模块对象
    for (let i = 0; i < deps.length; i++) {
      deps[i] = modules[deps[i]];
    }
    // 执行模块实现函数，注入依赖，并将结果存储到modules中
    modules[name] = impl.apply(impl, deps);
  }

  // 获取模块的方法
  const get = (name) => {
    return modules[name];
  }
  
  // 公开define和get方法
  return {
    define,
    get,
    modules
  }
})()

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
const modules = MyModule.modules;

console.log(module1); // { Hello: [Function: Hello] }
console.log(module2); // { awesome: [Function: awesome] }
console.log(modules); // { module1: { Hello: [Function: Hello] }, module2: { awesome: [Function: awesome] }}

console.log(module1.Hello('world')); // Let me introduce:world
module2.awesome(); // LET ME INTRODUCE:HUNGRY

/**
 * 注：
 * apply()方法接收两个参数，第一个参数是函数内this的值，第二个参数是一个数组，表示函数的参数。
 * 
 */