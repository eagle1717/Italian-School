import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
Vue.use(VueRouter);
const routes = [
  {
    path: "/verification/:token",
    name: "Verification",
    component: () => import("@/views/StudentArea/Auth/Verification"),
    meta: {
      layout: "Empty"
    }
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/StudentArea/Auth/Login"),
    meta: {
      layout: "Empty"
    }
  },
  {
    path: "/registration",
    name: "Registration",
    component: () => import("@/views/StudentArea/Auth/Registration"),
    meta: {
      layout: "Empty"
    }
  },
  {
    path: "/checkemail",
    name: "CheckEmail",
    component: () => import("@/views/StudentArea/Auth/CheckEmail"),
    meta: {
      layout: "Empty"
    }
  },
  {
    path: "/confirm-registration",
    name: "ConfirmRegistration",
    component: () => import("@/views/StudentArea/Auth/ConfirmRegistration"),
    meta: {
      layout: "Empty"
    }
  },
  {
    path: "/home",
    name: "HomePage",
    component: () => import("@/views/StudentArea/HomePage/HomePage")
  },
  {
    path: "/group",
    name: "Group",
    redirect: "/group/courses",
    component: import("@/views/StudentArea/GroupPage/Group.vue"),
  },
  {
    path: "/group/courses",
    component: () => import("@/views/StudentArea/GroupPage/Courses.vue"),
    name: 'Courses',
  },
  {
    path: "/group/webinars",
    component: () => import("@/views/StudentArea/GroupPage/Webinars.vue"),
    name: 'Webinars',
  },
  {
    path: "/quiz",
    name: "Qviz",
    component: () => import("@/views/StudentArea/Auth/Qviz.vue"),
    meta: {
      layout: 'NoContent'
    }
  },
  {
    path: "/teachers",
    name: "Teachers",
    component: () => import("@/views/StudentArea/CuratorsPage/MainTeachers.vue"),
    props: true,
  },
  {
    path: "/teachers/:id",
    name: "TeacherPage",
    props: true,
    component: () => import("@/views/StudentArea/CuratorsPage/TeacherPage"),
  },
  {
    path: "/level",
    name: "FindOutLevel",
    component: () => import("@/views/StudentArea/HomePage/FindOutLevel")
  },
  {
    path: "/reset-password/:token",
    name: "ResetPassword",
    component: () => import("@/views/StudentArea/Auth/ResetPassword"),
    meta: {
      layout: "Empty"
    }
  },
  {
    path: "/password-recovery/",
    name: "PasswordRecovery",
    component: () => import("@/views/StudentArea/Auth/PasswordRecovery"),
    meta: {
      layout: "Empty"
    }
  },
  {
    path: "/support",
    name: "Help",
    props: true,
    component: () => import("@/views/StudentArea/SupportPage/Help"),
  },
  {
    path: "/support/my-message",
    name: "MyMessage",
    props: true,
    component: () => import("@/views/StudentArea/SupportPage/MyMessage"),
  },
  {
    path: "/checkout/:id",
    name: "Checkout",
    component: () => import("@/views/StudentArea/Checkout/CheckoutPage")
  },
  {
    path: "/purchase/:lesson/:id/:status",
    name: "CheckoutStatus",
    component: () => import("@/views/StudentArea/Checkout/CheckoutStatus"),
  },
  {
    path: "/promotion-lesson",
    name: "PromotionLesson",
    component: () => import("@/views/StudentArea/PresentPages/PromotionLesson"),
  },
  {
    path: "/offer",
    name: "SpecialOfferPage",
    component: () => import("@/views/StudentArea/PresentPages/SpecialOfferPage"),
  },
  {
    path: "/certificate",
    name: "Certificate",
    component: () => import("@/views/StudentArea/PresentPages/Certificate"),
  },
  {
    path: "/settings",
    name: "SettingPage",
    component: () =>
      import("@/views/StudentArea/SettingsPage/SettingPage"),
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: () => import("@/views/StudentArea/CalendarPage/Calendar"),
  },
  // teacher
  {
    path: "/home2",
    name: 'Home2',
    component: () => import("@/views/TeacherArea/HomePage")
  },
  {
    path: "/homework",
    name: "HomeWork",
    component: () => import("@/views/TeacherArea/HomeWork")
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {
  store.dispatch('set_loading', true)
  store.dispatch("hide_modal");
  next();
});
router.afterEach(() => {
  store.dispatch('set_loading', false)
  // store.dispatch('hide_show_overlay', true)
});
export default router;
