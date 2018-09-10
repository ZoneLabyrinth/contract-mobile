<template>
  <div id="app">
    <app-header></app-header>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/nav'
export default {
  name: "App",
  components:{
    AppHeader
  }
};
</script>

<style lang="less">
/* @import "~vux/src/styles/reset.scss"; */
@import "./assets/styles/reset.less";
@import "~vux/src/styles/1px.less";


body {
  background-color: #fff;
}
.view {
  @diff:2.2rem;
  height: calc(~'100vh - @{diff}');
  overflow-y: auto;
  
}

/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
