<template>
  <div class="contract-wrapper">
     <div class="user-info">
       <p>
         <i class="iconfont icon-user"></i>
         <span>用户名</span>
       </p>
     </div>
     <text-panel></text-panel>


  </div>
</template>

<script>
import TextPanel from '@/components/Textpanel'
export default {
  data () {
    return {
    };
  },

  mounted(){},

  methods: {},

  components: {
    TextPanel
  },
}

</script>
<style lang='less' scoped>
@import url('../../assets/styles/mixin.less');
.contract-wrapper{
  .wh(100%,100%);
  background: #F5F5F5;
  .user-info{
    height: 2rem;
    // line-height: 2rem;
    p{  
      height: 2rem;
      line-height: 2rem;
      padding-left: 0.9rem;
      i{
        font-size: 0.9rem;
        vertical-align: middle;
        color:@theme-color
      }
      span{
        font-size: 0.7rem;
        font-weight: bold
      }
    }
  }
}


</style>