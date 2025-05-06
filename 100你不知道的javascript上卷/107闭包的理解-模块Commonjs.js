/**
 * 通过在模块实例的内部保留对公共API对象的内部引用，可以从内部对模块实例进行修改，包括添加或删除方法和属性，以及修改它们的值
 */
var foo = ((id) => {
  const change = () => {
    publicAPI.identify = identify2;
  }

  const identify1 = () => {
    console.log(id);
  }

  const identify2 = () => {
    console.log(id.toUpperCase());
  }

  let publicAPI = {
    change,
    identify: identify1,
  };
  return publicAPI;
})('foo bar');

foo.identify();
foo.change();
foo.identify();