
import VueTouch from './vueTouch';

if (typeof exports == "object") {
  module.exports = VueTouch;
} else if (typeof define == "function" && define.amd) {
  define([], function () {
    return VueTouch;
  });
} else if (typeof window !== 'undefined' && window.Vue) {
  window.VueTouch = VueTouch;
  // Vue.use(vueTouch);
}
