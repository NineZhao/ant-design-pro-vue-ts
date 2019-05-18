import Vue from "vue";
// import { login, getInfo, logout } from '@/api/login'
// import { ACCESS_TOKEN } from "@/store/mutation-types";
import { welcome } from "@/utils/util";

const user = {
  state: {
    token: "",
    name: "",
    welcome: "",
    avatar: "",
    roles: [],
    info: {}
  },

  mutations: {
    SET_TOKEN: (state: { token: string }, token: string) => {
      state.token = token;
    },
    // tslint:disable-next-line: no-shadowed-variable
    SET_NAME: (state: { name: string; welcome: string }, { name, welcome }: any) => {
      state.name = name;
      state.welcome = welcome;
    },
    SET_AVATAR: (state: { avatar: string }, avatar: string) => {
      state.avatar = avatar;
    },
    SET_ROLES: (state: { roles: [] }, roles: []) => {
      state.roles = roles;
    },
    SET_INFO: (state: { info: {} }, info: {}) => {
      state.info = info;
    }
  },

  actions: {
    // 登录
    Login({ commit }: any, userInfo: {}) {
      // return new Promise((resolve, reject) => {
      //   login(userInfo)
      //     .then(response => {
      //       const result = response.result;
      //       Vue.ls.set(ACCESS_TOKEN, result.token, 7 * 24 * 60 * 60 * 1000);
      //       commit("SET_TOKEN", result.token);
      //       resolve();
      //     })
      //     .catch(error => {
      //       reject(error);
      //     });
      // });
    },

    // 获取用户信息
    GetInfo({ commit }: any) {
      return new Promise((resolve, reject) => {
        // getInfo()
        //   .then(response => {
        //     const result = response.result;
        //     if (result.role && result.role.permissions.length > 0) {
        //       const role = result.role;
        //       role.permissions = result.role.permissions;
        //       role.permissions.map(per => {
        //         if (per.actionEntitySet != null && per.actionEntitySet.length > 0) {
        //           const action = per.actionEntitySet.map(action => {
        //             return action.action;
        //           });
        //           per.actionList = action;
        //         }
        //       });
        //       role.permissionList = role.permissions.map(permission => {
        //         return permission.permissionId;
        //       });
        //       commit("SET_ROLES", result.role);
        //       commit("SET_INFO", result);
        //     } else {
        //       reject(new Error("getInfo: roles must be a non-null array !"));
        //     }
        //     commit("SET_NAME", { name: result.name, welcome: welcome() });
        //     commit("SET_AVATAR", result.avatar);
        //     resolve(response);
        //   })
        //   .catch(error => {
        //     reject(error);
        //   });
      });
    }

    // 登出
    // Logout({ commit, state }) {
    //   return new Promise(resolve => {
    //     commit("SET_TOKEN", "");
    //     commit("SET_ROLES", []);
    //     Vue.ls.remove(ACCESS_TOKEN);

    //     logout(state.token)
    //       .then(() => {
    //         resolve();
    //       })
    //       .catch(() => {
    //         resolve();
    //       });
    //   });
    // }
  }
};

export default user;
