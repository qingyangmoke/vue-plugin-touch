# vue-plugin-touch

> vue2.0 touch 事件 把原生的 touchstart,touchmove,touchend,touchcancel添加到Vue组件中

## Install

> 该插件支持 Vue2.0. 不支持 Vue 1.*版本


### 通过npm安装

``` bash
npm install vue-plugin-touch
```

```Javascript
import vueTouch from 'vue-plugin-touch';
Vue.use(vueTouch);
```

#### 直接引用
```Javascript
<script src='vue-plugin-touch/dist/index.js' />
```
## 使用


``` html
<div v-touch:touchstart="onTouchStart" v-touch:touchmove="onTouchMove" v-touch:touchend="onTouchEnd" v-touch:touchcancel="onTouchEnd">Touch me!</div>
```

### 支持的事件

touchstart、touchmove、touchend、touchcancel


## License

[MIT](http://opensource.org/licenses/MIT)
