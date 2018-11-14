<template>
  <div class="contract-wrapper">
    <user-info :name="name"></user-info>
    <text-panel :data="total"></text-panel>
    <text-panel :data="sum" title="累计已确认收入"></text-panel>
    <text-panel :data="balance" title="应收账款余额"></text-panel>
    <pie-panel title="权责应收账款占比">
      <div>
          <e-charts :options ="rose2"></e-charts>
      </div>
    </pie-panel>
    <pie-panel title="应收账款余额比重">
      <div>
          <e-charts :options ="bar"></e-charts>
      </div>
    </pie-panel>
  </div>
</template>

<script>
import UserInfo from "@/components/UserInfo";
import TextPanel from "@/components/TextPanel";
import PiePanel from "@/components/PiePanel";
import { rose } from "@/assets/js/pie";
import { bar } from "@/assets/js/bar";
import { mapGetters } from "vuex";
import { getQueryString } from "@/utils/filters";
const rose1 = JSON.parse(JSON.stringify(rose));
const rose2 = JSON.parse(JSON.stringify(rose));
export default {
  data() {
    return {
      rose,
      rose1,
      rose2,
      bar,
      total: [
        {
          name: "合同金额",
          amount: ""
        }
      ],
      sum: [
        {
          name: "合同应收账款",
          amount: ""
        },
        {
          name: "权责应收账款",
          amount: ""
        },
        {
          name: "发票应收账款",
          amount: ""
        }
      ],
      balance: [
        {
          name: "合同应收账款",
          amount: ""
        },
        {
          name: "权责应收账款",
          amount: ""
        },
        {
          name: "发票应收账款",
          amount: ""
        }
      ]
    };
  },

  mounted() {
    this.getData();
  },
  computed: {
    ...mapGetters(["getUserInfo"]),
    name() {
      return this.getUserInfo.name;
    }
  },

  methods: {
    getData() {
      this.axios
        .get(
          `${this.api.getPersonalTotal}?gs_flag=${
            this.getUserInfo.duty
          }&now_date=${getQueryString('date')}&push_name=${this.getUserInfo.email}`
        )
        .then(result => {
          if (result.data.flag === 0) {
            console.log(result.data);
            let data = result.data.data;
            this.total[0].amount = data.contract;
            this.balance[0].amount = data.responsibilityList.hetong;
            this.balance[1].amount = data.responsibilityList.quanze;
            this.balance[2].amount = data.responsibilityList.fapiao;

            this.sum[0].amount = data.totalList.shoukuan;
            this.sum[1].amount = data.totalList.quanze;
            this.sum[2].amount = data.totalList.kaipiao;

            //图标
            data.conChart = _.map(data.conChart, num => {
              num.value = Number(num.value).toFixed(2);
              return num;
            });
            data.resChart = _.map(data.resChart, num => {
              num.value = Number(num.value).toFixed(2);
              return num;
            });
            data.totalChart = _.map(data.totalChart, num => {
              num.value = Number(num.value).toFixed(2);
              return num;
            });

            this.rose.series[0].data = data.conChart;
            this.rose1.series[0].data = data.resChart;
            this.rose2.series[0].data = data.totalChart;
          }
        })
        .catch(err => {});
      this.axios
        .get(
          `${this.api.getPersonalCredit}?dept_name=${
            decodeURI(escape(getQueryString('dept_name')))
          }&gs_flag=${decodeURI(escape(getQueryString('duty')))}&now_date=${getQueryString('date')}&push_name=${
            this.getUserInfo.email
          }`
        )
        .then(result => {
          if (result.data.flag === 0) {
            let data = result.data.data;
            this.bar.series[0].data = [
              data.normal.hetong,
              data.normal.quanze,
              data.normal.fapiao
            ];
            this.bar.series[1].data = [
              data.termination.hetong,
              data.termination.quanze,
              data.termination.fapiao
            ];
            this.bar.series[2].data = [
              data.pause.hetong,
              data.pause.quanze,
              data.pause.fapiao
            ];
          }
        })
        .catch(err => {});
    }
  },

  components: {
    UserInfo,
    TextPanel,
    PiePanel
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