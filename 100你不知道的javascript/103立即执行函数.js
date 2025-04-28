var a = 2;

(function(global) {
  var a = 3;

  console.log(a); // 3（当前作用域的 a）
  console.log(global.a); // 2（全局作用域的 a）
})(typeof window !== 'undefined' ? window : global); // 兼容浏览器和Node.js