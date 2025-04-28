var a = 2;

(function(gl) {
  var a = 3;

  console.log(a); // 3（当前作用域的 a）
  console.log(gl.a); // 2（全局作用域的 a）
})(typeof window !== 'undefined' ? window : global); // 兼容浏览器和Node.js