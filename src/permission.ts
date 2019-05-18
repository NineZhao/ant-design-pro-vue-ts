import Vue from "vue";
import router from "./router";
import store from "./store";

import notification from "ant-design-vue/lib/notification";

import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = ["login", "register", "registerResult"]; // no redirect whitelist

router.beforeEach((to, from, next) => {
  NProgress.start();
  // tslint:disable-next-line: no-console
  if (Vue.ls.get("Access-Token")) {
    if (to.path === "/user/login") {
      next({ path: "/dashboard/workplace" });
      NProgress.done();
    } else {
      // tslint:disable-next-line: no-console
      console.log(store);
      // if (store.getters.roles.length === 0) {
      //   store
      //     .dispatch("GetInfo")
      //     .then(res => {
      //       const roles = res.result && res.result.role;
      //       store.dispatch("GenerateRoutes", { roles }).then(() => {
      //         // 根据roles权限生成可访问的路由表
      //         // 动态添加可访问路由表
      //         router.addRoutes(store.getters.addRouters);
      //         const redirect = decodeURIComponent((from.query.redirect === null && "") || to.path);
      //         if (to.path === redirect) {
      //           // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
      //           next({ ...to, replace: true });
      //         } else {
      //           // 跳转到目的路由
      //           next({ path: redirect });
      //         }
      //       });
      //     })
      //     .catch(() => {
      //       notification.error({
      //         message: "错误",
      //         description: "请求用户信息失败，请重试"
      //       });
      //       store.dispatch("Logout").then(() => {
      //         next({ path: "/user/login", query: { redirect: to.fullPath } });
      //       });
      //     });
      // }
      next();
      NProgress.done();
    }
  }
});
