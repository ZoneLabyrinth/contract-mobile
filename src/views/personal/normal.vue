<template>
  <div class="contract-wrapper">
    <user-info :name="name"></user-info>
     <text-panel :data="contract" >
       <div slot="chart">
         <e-charts :options="pie"></e-charts>
       </div>
     </text-panel>
     <chart-panel :data="receivables" showChart title="应收账款余额占合同金额比重">
     </chart-panel>
     <text-panel title="权责预收占合同金额比重" :data="response">
       <div slot="chart">
         <e-charts :options="pie1"></e-charts>
       </div>
     </text-panel>

  </div>
</template>

<script>
import UserInfo from "@/components/UserInfo";
import TextPanel from "@/components/TextPanel";
import ChartPanel from "@/components/ChartPanel";
import { pie } from "@/assets/js/pie";
import { mapGetters } from 'vuex';
import { getQueryString } from '@/utils/filters'
const pie1 = JSON.parse(JSON.stringify(pie))
export default {
  data() {
    return {
      pie,
      pie1,
      conChart: [
        {name:'合同应收',value:''},
        {name:"其他",value:''}
      ],
      resChart: [
        {name:'权责预收',value:''},
        {name:"其他",value:''}
      ],
      contract: [
        {
          name: "合同金额",
          amount: "",
          percent: [],
          title:'合同金额比重'
        }
      ],
      receivables:[
        {
          name:'合同应收',
          amount:'',
          percent:'',
          title:'合同应收比重'
        },
        {
          name:'权责应收',
          amount:'',
          percent:'',
          title:'权责应收比重'
        },
        {
          name:'发票应收',
          amount:'',
          percent:'',
          title:'发票应收比重'
        }
      ],
      response:[
        {
          name:'权责预收',
          amount:'',
          percent:'',
          title:'权责预收比重'
        }
      ]
    };
  },

  mounted() {
    this.getData();
  },
  computed:{
    ...mapGetters(['getUserInfo']),
    name(){
      return `${this.getUserInfo.name}(${decodeURI(escape(getQueryString('duty')))})`
    }
  },

  methods: {
    getData() {
      this.axios
        .get(
          `${
            this.api.getPersonalContract
          }?abnormal_name=${this.$route.meta.status}&gs_flag=${decodeURI(escape(getQueryString('duty')))}&now_date=${getQueryString('date')}&push_email=${this.getUserInfo.email}`
        )
        .then(result => {
          // console.log(result);
          if (result.data.flag === 0) {
            let data = result.data.data
            
            Object.assign(this.contract[0],data.allAmount);
            Object.assign(this.receivables[0],data.contract);
            Object.assign(this.receivables[1],data.responsiblity);
            Object.assign(this.receivables[2],data.invoice);
            Object.assign(this.response,data.advanced)
  
            this.conChart.forEach((element,index) => {
              element.value = data.allAmount.percent?data.allAmount.percent[index]:0;
              this.resChart[index].value = data.advanced.percent?data.advanced.percent[index]:0
            });
            this.pie.series[0].data = this.conChart;
            this.pie.graphic.style.text = this.conChart[0].value*100 + '%'
            this.pie1.series[0].data = this.resChart;
            this.pie1.graphic.style.text = this.resChart[0].value*100 + '%'
            this.pie1.title.text = '权责预收比重'
          }
        })
        .catch(err => {});
    }
  },
  watch:{
    '$route'(to,from){
      if(to.path!== from.path){
          this.getData();
      }
    }

  },

  components: {
    UserInfo,
    TextPanel,
    ChartPanel
  }
};
</script>
<style lang='less'>
@import url("../../assets/styles/mixin.less");
.contract-wrapper {
  width: 100%;
  background: #f5f5f5;
  .user-info {
    height: 2rem;
    // line-height: 2rem;
    p {
      height: 2rem;
      line-height: 2rem;
      padding-left: 0.9rem;
      i {
        font-size: 0.9rem;
        vertical-align: middle;
        color: @theme-color;
      }
      span {
        font-size: 0.7rem;
        font-weight: bold;
      }
    }
  }
}
</style>