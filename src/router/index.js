import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import user from "./user";
import teacher from "./teacher";
Vue.use(VueRouter);
const routes = [
  ...user,
  ...teacher
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {
  store.dispatch("set_loading", true);
  store.dispatch("hide_modal");
  next();
});
router.afterEach(() => {
  store.dispatch("set_loading", false);
});
export default router;
