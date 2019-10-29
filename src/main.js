import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import http from "./http";
import dayjs from "dayjs";
import axios from "axios";
import VCharts from "v-charts";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
// use

Vue.prototype.$axios = http;
Vue.prototype.$dayjs = dayjs;
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(mavonEditor);
Vue.use(VCharts);

// 响应拦截
axios.defaults.timeout = 10000; // 设置超时时间
// 过滤请求结果 只返回结果的data
axios.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
