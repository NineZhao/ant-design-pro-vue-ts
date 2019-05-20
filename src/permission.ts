import Vue from "vue";
import router from "./router";
import store from "./store";

import notification from "ant-design-vue/lib/notification";

import NProgress from "nprogress"; // progress bar
import { setDocumentTitle, domTitle } from "@/utils/domUtil";
import "nprogress/nprogress.css"; // progress bar style
import { ACCESS_TOKEN } from "@/store/mutation-types";

import { BasicLayout, RouteView } from "@/layouts";

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = ["login", "register"]; // no redirect whitelist

router.beforeEach((to, from, next) => {
  NProgress.start();
  // tslint:disable-next-line: no-unused-expression
  to.meta && (typeof to.meta.title !== "undefined" && setDocumentTitle(`${to.meta.title} - ${domTitle}`));
  if (Vue.ls.get(ACCESS_TOKEN)) {
    if (to.path === "/user/login") {
      next({ path: "/dashboard/workplace" });
      NProgress.done();
    } else {
      if (store.getters.roles.length === 0) {
        store
          .dispatch("GetInfo")
          .then((res: { result: { role: any } }) => {
            const roles = res.result && res.result.role;
            store.dispatch("GenerateRoutes", { roles }).then(() => {
              // 根据roles权限生成可访问的路由表
              // 动态添加可访问路由表
              const aaa = store.getters.addRouters.concat();
              // tslint:disable-next-line: no-console
              console.log(aaa, [
                {
                  path: "/",
                  redirect: "/404"
                }
              ]);
              router.addRoutes([
                {
                  path: "/",
                  name: "index",
                  component: BasicLayout,
                  meta: { title: "首页" },
                  redirect: "/dashboard/workplace",
                  children: [
                    {
                      path: "/dashboard",
                      name: "dashboard",
                      redirect: "/dashboard/workplace",
                      component: RouteView,
                      meta: { title: "仪表盘", keepAlive: true, permission: ["dashboard"] },
                      children: [
                        {
                          path: "/dashboard/workplace",
                          name: "test",
                          component: () => import("@/views/dashboard/test.vue"),
                          meta: { title: "分析页", keepAlive: false, permission: ["dashboard"] }
                        }
                      ]
                    }
                  ]
                }
              ]);
              const redirect = decodeURIComponent((from.query.redirect === null && "") || to.path);
              if (to.path === redirect) {
                // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
                next({ ...to, replace: true });
              } else {
                // 跳转到目的路由
                next({ path: redirect });
              }
            });
          })
          .catch(() => {
            notification.error({
              message: "错误",
              description: "请求用户信息失败，请重试"
            });
            store.dispatch("Logout").then(() => {
              next({ path: "/user/login", query: { redirect: to.fullPath } });
            });
          });
      }
      next();
      NProgress.done();
    }
  }
});
