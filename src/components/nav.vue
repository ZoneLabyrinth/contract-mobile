<template>
    <div class="nav-wrapper">
        <tab class="re-tab">
            <tab-item v-for="(item,index) in nav" :key="index" :selected="$route.path === item.url"  @on-item-click="OnItemClick(item)">{{item.name}}</tab-item>
        </tab>
    </div>
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
      required:true
    },
  },  

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