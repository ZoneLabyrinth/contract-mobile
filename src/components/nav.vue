<template>
    <tab class="re-tab">
        <tab-item v-for="(item,index) in nav" :key="index" :selected="$route.path === item.url"  @on-item-click="OnItemClick(item)">{{item.name}}</tab-item>
    </tab>
</template>

<script>
import { Tab, TabItem } from 'vux'
export default {
  data () {
    return {
    };
  },
  props:{
    nav:{
      type:Array,
      default:function(){
          let arr = [
            { url: '/normal', name: '正常合同'},
            { url: '/termination', name: '合同终止'},
            { url: '/pause', name: '合同暂停'},
            { url: '/total', name: '合计'}
        ]
          return arr
      }
    }
  },  
  mounted(){},

  methods: {
      OnItemClick(item){
          this.$router.push(item.url)
      }
  },

  components: {
      Tab,
      TabItem
  },
}

</script>
<style lang='less' scoped>
@import '../assets/styles/mixin.less';
.re-tab{
    .wh(100vw,2.2rem);
}



</style>