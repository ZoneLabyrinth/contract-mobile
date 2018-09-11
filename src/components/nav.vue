<template>
    <div class="nav-wrapper">
        <quick-searching v-if="show"></quick-searching>
        <tab class="re-tab">
            <tab-item v-for="(item,index) in nav" :key="index" :selected="$route.path === item.url"  @on-item-click="OnItemClick(item)">{{item.name}}</tab-item>
        </tab>
    </div>
</template>

<script>
import { Tab, TabItem } from 'vux'
import QuickSearching from '@/components/QuickSearching'
export default {
  data () {
    return {
    };
  },
  props:{
    nav:{
      type:Array,
      required:true
    },
    show:{
        type:Boolean,
        default:false
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
      TabItem,
      QuickSearching
  },
}

</script>
<style lang='less' scoped>
@import '../assets/styles/mixin.less';
.re-tab{
    .wh(100vw,2.2rem);
}



</style>