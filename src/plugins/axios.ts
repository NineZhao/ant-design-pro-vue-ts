// @ts-nocheck
// tslint:disable
"use strict";

import Vue from "vue";
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

// tslint:disable-next-line: variable-name
const _axios = axios.create(config);

_axios.interceptors.request.use(
  // tslint:disable-next-line
  function(config) {
    // Do something before request is sent
    return config;
  },
  // tslint:disable-next-line: only-arrow-functions
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  // tslint:disable-next-line: only-arrow-functions
  function(response) {
    // Do something with response data
    return response;
  },
  // tslint:disable-next-line: only-arrow-functions
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

// @ts-ignore

const Plugin = {
  install(Vue: any, options: any) {
    Vue.axios = _axios;
    Object.defineProperties(Vue.prototype, {
      axios: {
        get() {
          return _axios;
        }
      },
      $axios: {
        get() {
          return _axios;
        }
      }
    });
  }
};

Vue.use(Plugin);

export default Plugin;
