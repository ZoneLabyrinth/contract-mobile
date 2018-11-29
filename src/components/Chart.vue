<template>
  <div class="echarts" ref="echarts">
    
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  props:{
    options:{
      type:Object
    },
  },
  methods: {
    init(){
        var myChart =this.$echarts.init(this.$refs.echarts);
        myChart.setOption(this.options);
    }
  },
  watch:{
    options:{
      handler:function(val,oldVal){
        this.init()
      },
      deep:true
    }
  }
}

</script>
<style lang='less'>
  .echarts{
    width: 100%;
  }
</style>