<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend( {
  mounted () {
    Vue.ls.set( "Access-Token", "1ed32dewg43wgeg" );
  }
} );
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
