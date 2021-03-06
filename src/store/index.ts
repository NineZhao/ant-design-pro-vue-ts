import Vue from "vue";
import Vuex from "vuex";

import app from "./modules/app";
import permission from "./modules/permission";
import user from "./modules/user";
import getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    app,
    permission,
    user
  },
  state: {
    user: { roles: [] }
  },
  mutations: {},
  actions: {},
  getters
});
