<template>
  <div class="receivable-wrapper">
      <div class="title">
        <span>订阅号推送</span>
      </div>
      <div class="content-wrapper">
         <group>          
           <selector title="推送地址" :options="option" v-model="data.detailUrl"></selector>
           <x-input title="推送标题" text-align='right' v-model="data.title"></x-input>
           <!-- <x-input title="推送说明" text-align='right' v-model="data.desc"></x-input> -->
          <selector title="推送公司" :options="list" v-model="data.pkorg"></selector>
          <selector title="推送职位" :options="list" v-model="data.duty"></selector>
          <!-- <selector title="推送人员" :options="list" v-model="defaultValue"></selector> -->
           <x-input title="推送间隔" placeholder="天" direction='rtl' text-align='right' v-model="value"></x-input>
        </group>
      </div>
  </div>
</template>

<script>
import { Selector,Group,XInput } from 'vux'
// import { Select,Option } from 'element-ui'
export default {
  data () {
    return {
      list:[],
      value:'',
      option: ['personal','detail','department'],
      value8: '',
      data:{
        title: "",
        desc:"",
        detailUrl: "",
        pkorg:'',
        duty:'',
        // staffs:'',
        duration:""
      }
    };
  },

  mounted(){},

  methods: {
    getOrg(){
      this.axios.get(`${this.api.getOrg}?tabName=0`)
      .then((result) => {
        if(result.data.flag === 0){
          console.log(result.data)
          this.list =  result.data.data.name
        }
      }).catch((err) => {
        
      });
    },
    getDuty(){
      this.axios.get(`${this.api.getDuty}?tabName=0&pkorg=${this.pkorg}`)
      .then((result) => {
        if(result.data.flag === 0){
          console.log(result.data);
          this.list = result.data.data
        }

      }).catch((err) => {
        
      });
    }
  },

  watch:{
    'data.detailUrl':{
      handler(val,oldVal){
        this.getOrg();
      }
    },
    'data.pkorg':{
      handler(val,oldVal){
        this.getDuty()
      }
    }
  },

  components: {
    Group,
    Selector,
    XInput,
  },
}

</script>
<style lang='less' scoped>
.receivable-wrapper{
  width: 100%;
  height: 100%;
  .title{
    line-height: 2rem;
    text-align: center;
  }
  .content-wrapper{
    .el-select{
      width: 100%;
      text-align: center
    }
  }
}

</style>