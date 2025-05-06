typeof undefined === 'undefined' // true
typeof null === 'object' // true(🚩我认为是：js的一个设计bug)00000
typeof true === 'boolean' // true
typeof 32 === 'number' // true
typeof '21' === 'string' // true
typeof { name: 'myl' } === 'object' // true

// ES6中新加入的类型
typeof Symbol === 'symbol' // true