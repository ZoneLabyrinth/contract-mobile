<template>
  <div class="searching-wrapper">
    <div class="group">
      <input class="searching iconfont" :placeholder="title" >
      <span>取消</span>
    </div>
    <masker class="mask"></masker>

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
    padding: 0.25rem 0 0 0.5rem;
  }
  .searching{
    border: 1px solid #ccc;
    vertical-align: middle;
    width: 80%;
    height: 1.5rem;
    .borderRadios(0.25rem);
  }
  .mask{
    // border-radius: 0.25rem;
    background: #fff;
    position: fixed;
    z-index: 999;
    opacity: 0.5;
    width: 100%;
    height: 100%;
  }
}
</style>