import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import "./directives";
import './assets/index.css';
// import Toasted from 'vue-toasted';
// Vue.use(Toasted)
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
