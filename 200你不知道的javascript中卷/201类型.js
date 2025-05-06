// 类型判断
function isType(type) {
  return function (obj) {
    return Object.prototype.toString.call(obj) === `[object ${type}]`;
  };
}

// 使用
const isString = isType('String');
const isNumber = isType('Number');
const isBoolean = isType('Boolean');
const isArray = isType('Array');
const isFunction = isType('Function');
const isNull = isType('Null');
const isUndefined = isType('Undefined');
const isRegExp = isType('RegExp');
const isDate = isType('Date');
const isError = isType('Error');
const isSymbol = isType('Symbol');

console.log(isString('hello')); // true
console.log(isNumber(123)); // true
console.log(isBoolean(true)); // true
console.log(isArray([1, 2, 3])); // true
console.log(isFunction(function () {})); // true
console.log(isNull(null)); // true
console.log(isUndefined(undefined)); // true
console.log(isRegExp(/abc/)); // true
console.log(isDate(new Date())); // true
console.log(isError(new Error())); // true