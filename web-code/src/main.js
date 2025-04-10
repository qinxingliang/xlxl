import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index'
import request from './utils/request'
// 设置封装请求
// Vue.prototype.$axios = request;
// Vue.config.productionTip = false;

import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import 'tinymce/skins/ui/oxide/skin.css'

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.config.globalProperties.$axios = request;
app.config.productionTip = false;
app.use(ElementPlus, {
    locale: zhCn,
  })
// element 组件
app.use(ElementPlus)
// 路由
app.use(router);
app.mount('#app');