<template>
  <div class="searching-wrapper">
    <div class="group">
      <div class="searching-box">
        <i class="iconfont icon-find"></i>
        <input class="searching" placeholder="搜索" >
        <i class="iconfont icon-cancel"></i>
      </div>
      <span>取消</span>
    </div>
    <ul>
      <li>asfsd</li>
      <li>asfsd</li>
      <li>asfsd</li>
      <li>asfsd</li>
      <li>asfsd</li>
      <li>asfsd</li>
      <li>asfsd</li>
    </ul>
  </div>
</template>

<script>
import { Masker,XInput,Group } from 'vux'
export default {
  data () {
    return {
      title:'\ue604'
    };
  },

  mounted(){},

  methods: {},

  components: {
    Group,
    XInput,
    Masker
  },
}

</script>
<style lang='less' scoped>
@import url('../assets/styles/mixin.less');
.searching-wrapper{
  height: 2rem;
  .group{
    height: 2rem;
    .searching-box{
      width: 80%;
      display: inline-block;
      margin: 0.25rem 0.5rem;
      padding: 0 0.5rem;
      border: 1px solid #ccc;
      .borderRadios(0.25rem);
      .searching{
        @diff: 2rem;
        width: 80%;
        height: 1.5rem;
      }
      i{
        vertical-align: middle
      }
      i:last-child{
        position: relative;
        right: -1rem;
      }
    }
  }
  ul{
    width: 100%;
    // border: 1px solid #ccc;]
    background: #fff;
    position: relative;
    z-index: 9999;
    opacity: 1;
    max-height: 8rem;
    overflow-y: auto;
    li{
      width: 80%;
      font-size: 0.7rem;
      margin-left: 0.5rem;
      line-height: 1.5rem;
      border: 1px solid #ccc;
      border-bottom: 0;
      padding-left: 1.5rem;
      &:last-child{
        border-bottom: 1px solid #ccc;
      }
    }
    
  }
  // .mask{
  //   // border-radius: 0.25rem;
  //   background: #fff;
  //   position: fixed;
  //   z-index: 999;
  //   opacity: 0.5;
  //   width: 100%;
  //   height: 100%;
  // }
}
</style>