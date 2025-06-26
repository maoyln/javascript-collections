// 防抖
function debounce(fn, wait) {
  var time = null;

  return function () {
    var context = this;
    var arg = [...arguments];

    // 如果此时存在定时器的话，则取消之前的定时器重新记时
    if (time) {
      clearTimeout(time);
      time = null;
    }

    // 设置定时器，使事件间隔指定事件后执行
    time = setTimeout(() => {
      fn.apply(context, arguments);
    }, wait);
  }

}