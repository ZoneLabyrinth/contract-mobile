<template>
  <div id="app">
    <!-- <app-header :nav="isContract?contract:detail" :show="isContract?false:true"></app-header> -->
    <!-- <div class="view"> -->
      <router-view></router-view>
    <!-- </div> -->
  </div>
</template>

<script>
// import AppHeader from '@/components/nav'
export default {
  name: "App",
  data(){
    return {
    //   isContract:true,
    //   contract:[
    //         { url: '/normal', name: '正常合同'},
    //         { url: '/termination', name: '合同终止'},
    //         { url: '/pause', name: '合同暂停'},
    //         { url: '/total', name: '合计'}
    //   ],
    //   detail:[
    //         { url: '/before', name: '2016以前'},
    //         { url: '/after', name: '2016'},
    //         { url: '/last', name: '2017'},
    //         { url: '/year', name: '2018'}
    //   ]
    }
  },
  // components:{
  //   AppHeader
  // },
  // mounted(){
  //   this.isContract = false

  // }
};
</script>

<style lang="less">
/* @import "~vux/src/styles/reset.scss"; */
@import "./assets/styles/reset.less";
@import "~vux/src/styles/1px.less";


body {
  background-color: #fff;
  height: 100%;
}
// .view {
//   @diff:2.2rem;
//   height: calc(~'100vh - @{diff}');
//   overflow-y: auto;
  
// }

/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
