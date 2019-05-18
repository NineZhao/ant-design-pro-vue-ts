const VueAxios = {
  vm: {},
  install(Vue: { axios: any; prototype: any }, instance: any) {
    if (!instance) {
      // tslint:disable-next-line: no-console
      console.error("You have to install axios");
      return;
    }

    Vue.axios = instance;

    Object.defineProperties(Vue.prototype, {
      axios: {
        get: function get() {
          return instance;
        }
      },
      $http: {
        get: function get() {
          return instance;
        }
      }
    });
  }
};

export { VueAxios };
