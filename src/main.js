import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import axios from "axios";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import "./directives";
import './assets/index.css'
// import Chartkick from 'vue-chartkick'
// import Chart from 'chart.js'
//
// Vue.use(Chartkick.use(Chart))

// Vue.prototype.$http = axios;
// const token = localStorage.getItem("user-token");
//
// Vue.prototype.$http.defaults.baseURL = "https://work.studiait.it/api/";
// Vue.prototype.$http.defaults.headers["Content-Type"] =
//   "application/json;charset=UTF-8";
// Vue.prototype.$http.defaults.headers["Accept"] = "application/json";
// if (token) {
//   Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
// }

const requireComponent = require.context(
  "./components/Base",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );

  Vue.component(componentName, componentConfig.default || componentConfig);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    if (localStorage.getItem("user-token")) {
      store
        .dispatch("user/set_user_data", null)
        .then(() => {
          router.push({ name: "HomePage" });
        })
        .catch(() => {
          store.dispatch("auth/logout");
          router.push({ name: "login" });
        });
    }
  },
  render: h => h(App)
}).$mount("#app");
