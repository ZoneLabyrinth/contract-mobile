<template>
  <div class="contract-wrapper">
    <user-info :name="name"></user-info>
     <text-panel>
       <p slot="chart">
         <e-charts :options="pie"></e-charts>
       </p>
     </text-panel>

  </div>
</template>

<script>
import UserInfo from "@/components/UserInfo";
import TextPanel from '@/components/Textpanel'
import { pie } from '@/assets/js/pie'
console.log(pie)
export default {
  data () {
    return {
      pie,
      name:'王力'
    };
  },

  mounted(){},

  methods: {},

  components: {
    UserInfo,
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