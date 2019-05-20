import { asyncRouterMap, constantRouterMap } from "@/config/router.config";
import Vue, { ComponentOptions, AsyncComponent } from "vue";
type Component = ComponentOptions<Vue> | typeof Vue | AsyncComponent;
/**
 * 过滤账户是否拥有某一个权限，并将菜单从加载列表移除
 *
 * @param permission
 * @param route
 * @returns {boolean}
 */
// tslint:disable-next-line: no-shadowed-variable
function hasPermission(permission: any[], route: { children?: { length: any }; meta?: any }) {
  if (route.meta && route.meta.permission) {
    let flag = false;
    for (let i = 0, len = permission.length; i < len; i++) {
      flag = route.meta.permission.includes(permission[i]);
      if (flag) {
        return true;
      }
    }
    return false;
  }
  return true;
}

/**
 * 单账户多角色时，使用该方法可过滤角色不存在的菜单
 *
 * @param roles
 * @param route
 * @returns {*}
 */
function hasRole(roles: { id: number }, route: { meta: { roles: { includes: (arg0: any) => void } } }): any {
  if (route.meta && route.meta.roles) {
    return route.meta.roles.includes(roles.id);
  } else {
    return true;
  }
}

function filterAsyncRouter(routerMap: any, roles: any) {
  const accessedRouters = routerMap.filter((route: { children: { length: number } }) => {
    if (hasPermission(roles.permissionList, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles);
      }
      return true;
    }
    return false;
  });
  return accessedRouters;
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (
      state: {
        addRouters: ConcatArray<{ path: string; component: () => Promise<typeof import("*.vue")> }>;
        routers: Array<{ path: string; component: Component }>;
      },
      routers: ConcatArray<{ path: string; component: () => Promise<typeof import("*.vue")> }>
    ) => {
      state.addRouters = routers;
      state.routers = constantRouterMap.concat(routers);
    }
  },
  actions: {
    GenerateRoutes({ commit }: any, data: { roles: [] }) {
      return new Promise(resolve => {
        const { roles } = data;
        const accessedRouters = filterAsyncRouter(asyncRouterMap, roles);
        commit("SET_ROUTERS", accessedRouters);
        resolve();
      });
    }
  }
};

export default permission;
