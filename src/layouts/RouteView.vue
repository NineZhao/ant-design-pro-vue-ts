// <script>
// export default {
//   name: "RouteView",
//   props: {
//     keepAlive: {
//       type: Boolean,
//       default: true
//     }
//   },
//   data () {
//     return {};
//   },
//   render () {
//     const {
//       $route: { meta },
//       $store: { getters }
//     } = this;
//     const inKeep = (
//       <keep-alive >
//       <router-view />
//       </keep-alive>
//     );
//     const notKeep = <router-view />;
//     // 这里增加了 multiTab 的判断，当开启了 multiTab 时
//     // 应当全部组件皆缓存，否则会导致切换页面后页面还原成原始状态
//     // 若确实不需要，可改为 return meta.keepAlive ? inKeep : notKeep
//     if ( !getters.multiTab && meta.keepAlive === false )    {
//       return notKeep;
//     }
//     return this.keepAlive || getters.multiTab || meta.keepAlive
//       ? inKeep
//       : notKeep;
//   }
// };
</script>

<template>
  <div>
    <!-- <keep-alive v-if="keepAlive || getters.multiTab || meta.keepAlive">
      <router-view/>
    </keep-alive>
    <router-view v-else/>-->
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class RouterView extends Vue {
  @Prop( { type: Boolean, default: true } ) private keepAlive!: boolean;

  private meta!: { keepAlive: boolean, title: string, permission: string[] };
  private getters!: any;

  public created () {
    this.meta = this.$route.meta;
    this.getters = this.$store.getters;
  };

  public mounted () {
    console.log( this.keepAlive, this.getters.multiTab, this.meta.keepAlive )
  }
}
</script>

<style>
</style>

