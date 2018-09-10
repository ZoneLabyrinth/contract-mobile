<template>
  <div class="contract-wrapper">
     <div class="user-info">
       <p>
         <i class="iconfont icon-user"></i>
         <span>用户名</span>
       </p>
     </div>
     <text-panel>
       <p slot="chart">
         <e-charts :options="pie"></e-charts>
       </p>
     </text-panel>


  </div>
</template>

<script>
import TextPanel from '@/components/Textpanel'
import { pie } from '@/assets/js/pie'
console.log(pie)
export default {
  data () {
    return {
      pie,
    };
  },

  mounted(){},

  methods: {},

  components: {
    TextPanel
  },
}

</script>
<style lang='less'>
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