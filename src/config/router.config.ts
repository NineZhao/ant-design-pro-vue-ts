import { BasicLayout, RouteView } from "@/layouts";
// import { bxAnaalyse } from "@/core/icons";

export const asyncRouterMap = [
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
        hideChildrenInMenu: true,
        meta: { title: "仪表盘", keepAlive: true, permission: ["dashboard"] },
        children: [
          {
            path: "/dashboard/workplace",
            name: "test",
            component: () => import("@/views/dashboard/test.vue")
          }
        ]
      }
    ]
  },
  {
    path: "*",
    redirect: "/404",
    hidden: true
  }
];

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: "/404",
    component: () => import("@/views/404.vue")
  }
];
