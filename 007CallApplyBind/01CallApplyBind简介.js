// 1. call 方法
// call 方法可以调用一个函数，并且显式地设置 this 的值以及传递给函数的参数。参数在 call 方法中是逐个传递的。

// 语法
  // function.call(thisArg, arg1, arg2, ...)
  // thisArg: 在函数执行时，this 关键字所指向的对象。
  // arg1, arg2, ...: 传递给函数的参数。

function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'Alice' };

greet.call(person, 'Hello', '!'); // 输出: "Hello, Alice!"

// 解释：
// 使用 call 将 this 绑定到 person 对象，并传递两个参数 'Hello' 和 '!' 给函数 greet。

console.log('--------------------------------------华丽分割线--------------------------------------');

// 2. apply 方法
// apply 方法与 call 方法非常相似，不同之处在于 apply 使用的是一个参数数组，而不是一组单独的参数。

// 语法
// function.apply(thisArg, [argsArray])
// thisArg: 在函数执行时，this 关键字所指向的对象。
// [argsArray]: 传递给函数的参数数组。

function greet1(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person1 = { name: 'Alice' };

greet1.apply(person1, ['Hello', '!']); // 输出: "Hello, Alice!"

// 解释：
// 使用 apply 将 this 绑定到 person 对象，并通过数组 ['Hello', '!'] 传递参数。

console.log('--------------------------------------华丽分割线--------------------------------------');

// 3. bind 方法
// bind 方法创建一个新的函数，并且将 this 绑定到指定的对象。不同于 call 和 apply，bind 不会立即执行该函数，而是返回一个新的函数。

// 语法
// const boundFunction = function.bind(thisArg, arg1, arg2, ...)
// thisArg: 绑定的 this 值。
// arg1, arg2, ...: 预设的参数，这些参数将在调用新函数时传递。

function greet2(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person2 = { name: 'Alice' };

// const greetAlice = greet2.bind(person2, 'Hello');
// greetAlice('!'); // 输出: "Hello, Alice!"

const greetAlice = greet2.bind(person2, 'Hello', '!');
greetAlice()

// 解释：
// 使用 bind 将 this 绑定到 person 对象，并预设了 greeting 参数为 'Hello'。
// 返回的新函数 greetAlice 可以在之后调用，并继续传递剩余的参数。