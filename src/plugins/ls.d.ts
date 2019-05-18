import Vue from "vue";

declare module "vue/types/vue" {
  interface VueConstructor {
    ls: {
      set: Function;
      get: Function;
    };
  }
}
