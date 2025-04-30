/**
 * API调用上下文
 */

// 这些函数实际上就是通过call(..)或者apply(..)实现了显式绑定，这样你可以少写一些代码。

// forEach的第二个参数，绑定this的对象
function foo(el) {
  console.log(el, this.id);
}

var obj = {
  id: 'awesome'
};

[1, 2, 3].forEach(foo, obj); // 输出：1 'awesome', 2 'awesome', 3 'awesome'