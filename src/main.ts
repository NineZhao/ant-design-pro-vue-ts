import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
Vue.config.productionTip = false;

// mock
import "./mock";

import "./core/use";
import "./permission";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
