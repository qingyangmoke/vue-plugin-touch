/**
 * @author: @采东
 * @description:
 * 为了避免在Vue的代码中直接操作dom 比如去自己获取dom 手动注册事件 造成代码的混乱
 * 保持Vue代码的统一性 增加touch插件 来注册touch相关的事件
 * 很简单的一个插件 只是把原生touch事件暴露给vue
 */
var VueTouch = {};
// 暴露出的全局配置项，也就是在调用 Vue.use(Vue, options) 时传入的第二个选项参数
VueTouch.config = {};
// 这里用来配置支持的事件类型
VueTouch.customEvents = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
// 核心部分，插件的具体逻辑均在此实现
VueTouch.install = function (Vue, options = {}) {
  // v-touch
  Vue.directive('touch', {
    isFn: true,
    bind: function (el, binding) {
      var event = binding.arg;
      if (VueTouch.customEvents.indexOf(event) === -1) throw Error(`暂不支持 v-touch:${event} 指令`);
      if (typeof binding.value !== 'function') throw Error(`v-touch:${event} 值必须为function`);
      el.addEventListener(event, binding.value);
    },
    update: function (el, binding) {
      var event = binding.arg;
      el.removeEventListener(event, binding.oldValue);
      el.addEventListener(event, binding.value, false);
    },
    unbind: function (el, binding) {
      var event = binding.arg;
      el.removeEventListener(event, binding.value);
    }
  });
};

export default VueTouch;
